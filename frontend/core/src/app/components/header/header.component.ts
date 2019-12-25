import * as fromStore from '@app/store';
import get from 'lodash/get';
import { AppActions } from '@app/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();

  constructor(
    private store: Store<fromStore.AppState>
  ) { }

  public ngOnInit(): void {
    this.store.dispatch({ type: AppActions.SET_FLAG });
    this.store.pipe(
      select(fromStore.appState),
      takeUntil(this.destroy$))
      .subscribe(state => {
        console.table(get(state, 'app.flag', ''));
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
