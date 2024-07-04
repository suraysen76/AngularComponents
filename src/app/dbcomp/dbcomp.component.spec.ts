import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBCompComponent } from './dbcomp.component';
import from mssql

describe('DBCompComponent', () => {
  let component: DBCompComponent;
  let fixture: ComponentFixture<DBCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DBCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
