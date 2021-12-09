import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import ButtonComponent from "./button.component";

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
      ],
    }).compileComponents();
  });

  it('should create the ButtonComponent', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Button'`, () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const button = fixture.componentInstance;
    expect(button.label).toEqual('Button');
  });

});
