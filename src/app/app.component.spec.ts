import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pgn-viewer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pgn-viewer');
  });

  it(`should render the chess-board component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const chessBoard = fixture.nativeElement.querySelector('ngx-chess-board');
    expect(chessBoard).toBeTruthy();
  });
});
