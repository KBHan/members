var Form = require('react-formal'),
  yup = require('yup');

Form.addInputTypes(require('react-formal-inputs'));

var defaultStr = yup.string().default('');
var defaultBool = yup.bool().default(false);

var profileObject = yup.object({
  infoObject: yup.object({
    entityName: defaultStr.required(
      'Please enter the name of organization/individual'
    ),
    summaryContent: defaultStr,
    website: defaultStr,
    target: defaultStr,
    servDescription: defaultStr,
    type: defaultStr
  }),

  nameObject: yup.object({
    first: defaultStr.required('please enter a first name'),
    last: defaultStr.required('please enter a surname')
  }),

  addressObject: yup.object({
    street: defaultStr.required('please enter a street name'),
    city: defaultStr.required('please enter a city name'),
    zip: defaultStr
  }),

  contactObject: yup.object({
    name: defaultStr,
    email: defaultStr,
    phone: defaultStr
  }),

  financialObject: yup.object({
    microLoans: defaultBool,
    capInvestment: defaultBool,
    indDevAccounts: defaultBool,
    comLoans: defaultBool,
    lendingCircle: defaultBool
  }),

  housingObject: yup.object({
    affHousing: defaultBool,
    comLandTrust: defaultBool,
    dnPmtAssistance: defaultBool,
    coHousing: defaultBool
  }),

  workforceObject: yup.object({
    skillDev: defaultBool,
    apprentice: defaultBool,
    onTheJob: defaultBool,
    resume: defaultBool,
    comOrg: defaultBool
  }),

  communityObject: yup.object({
    econJustice: defaultBool,
    eduOrg: defaultBool,
    envJustice: defaultBool,
    foodJustice: defaultBool,
    healthJustice: defaultBool,
    immOrg: defaultBool,
    laborOrg: defaultBool,
    racialJustice: defaultBool
  }),

  advocacyObject: yup.object({
    advocacy: defaultBool,
    policy: defaultBool
  }),

  eduObject: yup.object({
    arts: defaultBool,
    compClass: defaultBool,
    finEdu: defaultBool,
    gedClass: defaultBool,
    youthDev: defaultBool,
    citizenship: defaultBool
  }),

  anchorObject: yup.object({
    localHire: defaultBool,
    localProcure: defaultBool,
    localInv: defaultBool
  }),

  directObject: yup.object({
    foodBank: defaultBool,
    healthyFood: defaultBool,
    sharedSpace: defaultBool,
    transit: defaultBool,
    volunteer: defaultBool,
    healthCare: defaultBool,
    interpret: defaultBool,
    other: defaultStr
  })
});

export default profileObject;
