import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper';
import { Shallow } from 'shallow-render';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule).dontMock(
      FormBuilderTypeSafe
    );
  });

  describe('fullNameWithGetSafe', () => {
    it('should return users full name', async () => {
      const { instance } = await shallow.render();
      instance.userInfoForm.patchValue({
        firstName: 'Steven',
        lastName: 'Smith',
      });

      expect(instance.fullNameWithGetSafe).toBe('Steven Smith');
    });
  });

  describe('fullNameWithControls', () => {
    it('should return users full name', async () => {
      const { instance } = await shallow.render();
      instance.userInfoForm.patchValue({
        firstName: 'Steven',
        lastName: 'Smith',
      });

      expect(instance.fullNameWithControls).toBe('Steven Smith');
    });
  });
});
