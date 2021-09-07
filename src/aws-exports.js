/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:be4c428b-fb16-47e4-8f57-319aaa5657a7",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_BOLCc4ZQk",
    "aws_user_pools_web_client_id": "3mo5e4nncqb50fsii8g7pbkrb4",
    "oauth": {
        "domain": "proconapp-staging.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        // "redirectSignIn": "http://localhost:3000/,https://proconapp-staging.auth.us-east-1.amazoncognito.com/",
        // "redirectSignOut": "http://localhost:3000/,https://proconapp-staging.auth.us-east-1.amazoncognito.com/",
        "redirectSignIn": "http://localhost:3000/",
        "redirectSignOut": "http://localhost:3000/",
        "responseType": "token"
    },
    "federationTarget": "COGNITO_USER_AND_IDENTITY_POOLS",
    "aws_cognito_login_mechanisms": [
        "PREFERRED_USERNAME",
        "FACEBOOK"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    }
};


export default awsmobile;