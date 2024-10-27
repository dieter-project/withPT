export interface OauthRequest {
  authorizationCode: string;
  role: string;
}

export interface SignupRequest {
  email: string;
  password?: string;
  name: string;
  birth: string;
  sex: string;
  height: number;
  weight: number;
  dietType: string;
  targetWeight: number;
  exerciseFrequency: string;
  authProvider: string;
}
