import { BehaviorSubject, throwError, of } from 'rxjs';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ResourceService, ToasterService, SharedModule, ConfigService, UtilService, BrowserCacheTtlService
} from '@sunbird/shared';
import { PageApiService, OrgDetailsService, CoreModule, UserService} from '@sunbird/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PublicPlayerService } from './../../../../services';
import { SuiModule } from 'ng2-semantic-ui';
import { SlickModule } from 'ngx-slick';
import * as _ from 'lodash';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Response } from './explore.component.spec.data';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ActivatedRoute, Router } from '@angular/router';
import { TelemetryModule } from '@sunbird/telemetry';
import { NgInviewModule } from 'angular-inport';
import { ExploreComponent } from './explore.component';

describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;
  let toasterService, configService, userService,
  utilService, browserCacheTtlService, pageApiService, orgDetailsService;
  const mockPageSection: Array<any> = Response.successData.result.response.sections;
  let sendOrgDetails = true;
  let sendPageApi = true;
  class RouterStub {
    navigate = jasmine.createSpy('navigate');
    url = jasmine.createSpy('url');
  }
  const resourceBundle = {
    'messages': {
      'fmsg': {},
      'emsg': {},
      'stmsg': {}
    }
  };
  class FakeActivatedRoute {
    queryParamsMock = new BehaviorSubject<any>({ subject: ['English'] });
    params = of({});
    get queryParams() { return this.queryParamsMock.asObservable(); }
    snapshot = {
      params: {slug: 'ap'},
      data: {
        telemetry: { env: 'resource', pageid: 'resource-search', type: 'view', subtype: 'paginate'}
      }
    };
    public changeQueryParams(queryParams) { this.queryParamsMock.next(queryParams); }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule.forRoot(), CoreModule.forRoot(), HttpClientTestingModule, SuiModule, TelemetryModule.forRoot()],
      declarations: [ExploreComponent],
      providers: [PublicPlayerService, { provide: ResourceService, useValue: resourceBundle },
      { provide: Router, useClass: RouterStub },
      { provide: ActivatedRoute, useClass: FakeActivatedRoute }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    toasterService = TestBed.get(ToasterService);
    configService = TestBed.get(ConfigService);
    userService = TestBed.get(UserService);
    utilService = TestBed.get(UtilService);
    browserCacheTtlService = TestBed.get(BrowserCacheTtlService);
    pageApiService = TestBed.get(PageApiService);
    orgDetailsService = TestBed.get(OrgDetailsService);
    sendOrgDetails = true;
    sendPageApi = true;
    spyOn(orgDetailsService, 'getOrgDetails').and.callFake((options) => {
      if (sendOrgDetails) {
        return of({hashTagId: '123'});
      }
      return throwError({});
    });
    spyOn(pageApiService, 'getPageData').and.callFake((options) => {
      if (sendPageApi) {
        return of({sections: mockPageSection});
      }
      return throwError({});
    });
  });
  it('should emit filter data when getFilters is called with data', () => {
    spyOn(component.dataDrivenFilter, 'emit');
    component.getFilters([{ code: 'board', range: [{index: 0, name: 'NCRT'}, {index: 1, name: 'CBSC'}]}]);
    expect(component.dataDrivenFilter.emit).toHaveBeenCalledWith({ board: 'NCRT'});
  });
  it('should emit filter data when getFilters is called with no data', () => {
    spyOn(component.dataDrivenFilter, 'emit');
    component.getFilters([]);
    expect(component.dataDrivenFilter.emit).toHaveBeenCalledWith({});
  });
  it('should fetch hashTagId from API and filter details from data driven filter component', () => {
    component.ngOnInit();
    component.getFilters([{ code: 'board', range: [{index: 0, name: 'NCRT'}, {index: 1, name: 'CBSC'}]}]);
    expect(component.hashTagId).toEqual('123');
    expect(component.prominentFilters).toEqual({ board: 'NCRT'});
  });
  it('should navigate to landing page if fetching org details fails and data driven filter dint returned data', () => {
    sendOrgDetails = false;
    component.ngOnInit();
    expect(component.router.navigate).toHaveBeenCalledWith(['']);
  });
  it('should navigate to landing page if fetching org details fails and data driven filter returns data', () => {
    sendOrgDetails = false;
    component.ngOnInit();
    component.getFilters([]);
    expect(component.router.navigate).toHaveBeenCalledWith(['']);
  });
  it('should fetch content after getting hashTagId and filter data and set carouselData if api returns data', () => {
    component.ngOnInit();
    component.getFilters([{ code: 'board', range: [{index: 0, name: 'NCRT'}, {index: 1, name: 'CBSC'}]}]);
    expect(component.hashTagId).toEqual('123');
    expect(component.prominentFilters).toEqual({ board: 'NCRT'});
    expect(component.showLoader).toBeFalsy();
    expect(component.carouselData.length).toEqual(1);
    expect(component.noResult).toBeFalsy();
  });
  it('should fetch content after getting hashTagId and filter data and throw error if page api fails', () => {
    sendPageApi = false;
    spyOn(toasterService, 'error').and.callFake(() => {});
    component.ngOnInit();
    component.getFilters([{ code: 'board', range: [{index: 0, name: 'NCRT'}, {index: 1, name: 'CBSC'}]}]);
    expect(component.hashTagId).toEqual('123');
    expect(component.prominentFilters).toEqual({ board: 'NCRT'});
    expect(component.showLoader).toBeFalsy();
    expect(component.carouselData.length).toEqual(0);
    expect(component.noResult).toBeTruthy();
    expect(toasterService.error).toHaveBeenCalled();
  });
  it('should unsubscribe from all observable subscriptions', () => {
    component.ngOnInit();
    spyOn(component.unsubscribe$, 'complete');
    component.ngOnDestroy();
    expect(component.unsubscribe$.complete).toHaveBeenCalled();
  });
});
