/**
 * Predictive Access API
 * The official Predictive Access API. The Predictive Access API is an HTTP API served by the Predictive Access engine. It is the API used by the Predictive GUI client to communicate with the Access application, so everything the Access client application can do can be done with the API.  # Introduction  The Predictive Access API is built on HTTP. The API is predominantly RESTful and for the most part has predictable resource URL's. It also accepts and returns JSON in the HTTP body. Any HTTP/REST library can be used to perform requests, or the Access Open API specification can be converted into an SDK in any of the 41 supported languages.  # Versioning  The API is usually changed in each release of Access, so API calls are versioned to ensure that existing client implementations do not break.  Starting from Access version 3.0.0, the API version is 3. To lock to this version, the `x-pre-api-version` header should be set to `3`. If no version header is included the call will default to the latest version.  All major releases (i.e. 3.x.x) should support this version of the API, so existing implementations will continue to work even if it is talking to a newer engine. Version compatibility means that requests can be made to the same endpoint specifying different versions and get back different models. If an unsupported version is requested a `400 Bad Request` error will be returned with a message explaining why the request failed.  In previous versions, it was possible to access the API without providing a version. This behavior is now deprecated.  The API uses an open schema model, which means the server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When writing implementation clients, additional properties need to be ignored to ensure they do not break when talking to newer versions.  This documentation is for version 3.0.0 of the API.  # Authentication  Authentication is required for all the API endpoints and must be supplied with each call. Depending on the requirements there are multiple authentication options. Due to the limitations of the Open API 2 specification, authorization headers are supplied on a per function basis. The acceptable formats for the header are `Bearer <session_id>` where `<session_id>` is replaced by the session id (see the `/sessions` documentation). Sessions are only suitable for browser based user sessions. It is strongly recomended that they not be used for application programmatic access as they are designed to dynamically inject human challenge-response tests (such as Captcha). For application API calls use the `Digest <api_key_signature>` where `<api_key_signature>` is replaced by the API key signature. Generating an API signature requires an API key that can be obtained either programmatically or via the web interface.  The following is a Java example of how to generate an API key signatures:  ``` public static String generateSignature(String keyId, String privateKey, String url) {      Long timestamp = Calendar.getInstance().getTimeInMillis() / 1000;     String toSign = String.format(\"[%s][%s]\", timestamp, url);     String hmac = HashUtils.createHmacSha1(toSign, privateKey);      return Base64.getEncoder().encodeToString(String.format(\"[%s]%s[%s]\", keyId, toSign, hmac).getBytes()); } ```  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"code\": 404   \"message\": \"page not found\" } ```  # Filtering  The API has a powerful query filter enabling collections to be searched using comparative filtering. When specifying a filter, the target property should be wrapped using `#{...}` and values should be wrapped using `${...}`. e.g. `#{email} = ${mail@example.com}`.  The following operators are supported: - `#{...} = ${...}` - `#{...} <> ${...}` - `#{...} < ${...}` - `#{...} <= ${...}` - `#{...} > ${...}` - `#{...} >= ${...}` - `contains(#{...},${...})` - `not contains(#{...},${...})`  Additionally the following formatters are supported: - `(...) and (...)` - `(...) or (...)`  Once a filter query has been constructed it must be percentile encoded before been added to the `filter` query parameter in the request.  ``` raw filter -> (contains(#{email},${@exa})) and (#{name} <> ${John}) encoded    -> (contains(%23%7Bemail%7D%2C%24%7B%40exa%7D))%20and%20(%23%7Bname%7D%20%3C%3E%20%24%7BJohn%7D) ```
 *
 * OpenAPI spec version: 3.0.0
 * Contact: support@predictivetech.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Expression } from './expression';


export interface Rule { 
    /**
     * An optional field identifier.
     */
    id?: string;
    /**
     * The optional GUI field. Even though this property is optional it is recommended or the GUI may fail to recognise the field.
     */
    field?: string;
    /**
     * The optional field type. If specified a best effort will be made to perform a type cast at evaluation time of the value. If no type is specified or the cast fails the value will be evaluated as a string.
     */
    type?: string;
    /**
     * The required field input name. During a rule evaluation the pattern is [input] [operator] [value]. e.g. [id] [equal] [123]
     */
    input?: string;
    /**
     * The required operator to define the evaluation comparison that must be achieved during evaluation. These values can be: `equal`, `not equal`, `in`, `not in`, `start`, `not start`, `end`, `not end`, `less`, `less or equal`, `greater` or `greater or equal`.
     */
    operator?: string;
    /**
     * The required field input value. All value types are serialised to a string for transport. The `type` property is used to type cast the value at evaluation time. During a rule evaluation the pattern is [input] [operator] [value]. e.g. [id] [equal] [123]
     */
    value?: string;
    /**
     * An optional sub-expression to evaluate as part of this rule.
     */
    expression?: Expression;
}
