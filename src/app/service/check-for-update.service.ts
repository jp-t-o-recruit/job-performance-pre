import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval, Observer } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CheckForUpdateService {

  constructor(private _appRef: ApplicationRef, private _updates: SwUpdate) {
    const sixHours = 6 * 60 * 60 * 1000;
    // TODO: デバッグ用時間短縮
    // const intervalMillisecond = sixHours;
    const intervalMillisecond = 30 * 1000;
    this.setupIntervalAppIsStable(_appRef, intervalMillisecond, () => {
      _updates.checkForUpdate();
    });
  }

  setupIntervalAppIsStable(appRef: ApplicationRef, intervalMillisecond: number, observer: () => void) {
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const interval$ = interval(intervalMillisecond);
    const everyIntervalOnceAppIsStable$ = concat(appIsStable$, interval$);

    return everyIntervalOnceAppIsStable$.subscribe(observer);
  }
}