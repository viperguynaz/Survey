import { Survey } from './survey';
export var SURVEYS: Survey[] = [
  {
    "Key": "OutGoingCall",
    "Description": "Survey for recording outgoing calls",
    "DaysToLive": 1,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "InboundCall",
    "Description": "Inbound Call",
    "DaysToLive": 365,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "OutboundDialer",
    "Description": "Outbound Dialer",
    "DaysToLive": 365,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "DelinquencyReasons",
    "Description": "Survey for recording delinquency reasons",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "AccountReview",
    "Description": "Survey for recording whether an account needs review",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "ManagerReview",
    "Description": "Survey for recording whether an account needs manager review",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "SkipResearch",
    "Description": "Survey for recording whether an account is being skip researched",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "Recovery",
    "Description": "Survey for recording recovery status",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "InsuranceLapse",
    "Description": "Survey for recording whether an account has a lapse in insurance",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "TotalLoss",
    "Description": "Survey for recording total loss status",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "Termination",
    "Description": "Survey for recording whether an account is being terminated",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "SpecialHandling",
    "Description": "Survey for recording special handling status of an account",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "Bankruptcy",
    "Description": "Survey for recording bankruptcy",
    "DaysToLive": 0,
    "WorkableTypeKey": "Account"
  },
  {
    "Key": "CustomerComplaints",
    "Description": "Customer Complaints",
    "DaysToLive": 365,
    "WorkableTypeKey": "Account"
  }
];