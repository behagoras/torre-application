// Global Settings
export const ENV = process.env.REACT_APP_ENV
export const ENVIRONMENTS = {
  local: 'local',
  development: 'development',
  staging: 'staging',
  production: 'production',
}

export const dribbbleClientId = process.env.REACT_APP_DRIBBBLE_CLIENT_ID
export const dribbbleClientSecret = process.env.REACT_APP_DRIBBBLE_CLIENT_SECRET
export const dribbbleRedirectUri = process.env.REACT_APP_DRIBBBLE_REDIRECT_URI
export const dribbbleAccessToken = process.env.REACT_APP_DRIBBBLE_ACCESS_TOKEN
export const dribbbleGetUserActive = process.env.REACT_APP_DRIBBBLE_GET_USER_ACTIVE !== 'false'

