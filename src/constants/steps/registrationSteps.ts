import {IRegistrationStep} from './types';

const registrationSteps: IRegistrationStep[] = [
  {
    id: 1,
    title: 'Personal Information',
    metaDescription: 'Personal Information meta description',
    containerComponent: 'RegistrationPersonalInformationContainer',
  },
  {
    id: 2,
    title: 'Password Setup',
    metaDescription: 'Password Setup meta description',
    containerComponent: 'RegistrationSetupPasswordContainer',
  },
  {
    id: 3,
    title: 'Contact Information',
    metaDescription: 'Contact Information meta description',
    containerComponent: 'RegistrationContactInformationContainer',
  },
  {
    id: 4,
    title: 'Verify Phone Number Information',
    metaDescription: 'Verify Phone Number meta description',
    containerComponent: 'RegistrationNumberVerifictaionContainer',
  },
];

export default registrationSteps;
