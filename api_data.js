define({ "api": [
  {
    "type": "POST",
    "url": "https://sheba-auth.herokuapp.com//plans/",
    "title": "Create Plan",
    "name": "CreatPlan",
    "group": "Plan",
    "description": "<p>Creates a new Plan.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name  of  Plan to be created</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>the description the plan to be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"name\":\t\t\t\"Legend\",\n\t\"description\":\t\"A Legend plan to subscribe\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"_id\": \"5a7eb05429edd235c2e6edf5\",\n    \"last_modified\": \"2018-02-10T08:41:56.299Z\",\n    \"date_created\": \"2018-02-10T08:41:56.299Z\",\n    \"name\": \"Legend\",\n    \"description\": \"A Legend plan to subscribe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/plan.js",
    "groupTitle": "Plan"
  },
  {
    "type": "DELETE",
    "url": "https://sheba-auth.herokuapp.com/plans/:id",
    "title": "Delete a Single Plan",
    "name": "DeletePlan",
    "group": "Plan",
    "description": "<p>Delete a single Plan</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a7eaa8408644b31db10f108\",\n    \"last_modified\": \"2018-02-10T08:56:07.177Z\",\n    \"date_created\": \"2018-02-10T08:17:08.499Z\",\n    \"name\": \"Economy\",\n    \"description\": \"An Economy plan to subscribe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/plan.js",
    "groupTitle": "Plan"
  },
  {
    "type": "GET",
    "url": "https://sheba-auth.herokuapp.com/plans/",
    "title": "Get a plan",
    "name": "GetPlane",
    "group": "Plan",
    "description": "<p>Get a single plan</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a7eaa8408644b31db10f108\",\n    \"last_modified\": \"2018-02-10T08:36:29.384Z\",\n    \"date_created\": \"2018-02-10T08:17:08.499Z\",\n    \"name\": \"Economy\",\n    \"description\": \"An Economy plan to subscribe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/plan.js",
    "groupTitle": "Plan"
  },
  {
    "type": "GET",
    "url": "https://sheba-auth.herokuapp.com/plans/",
    "title": "Get Plan By Pagination",
    "name": "Getplans",
    "group": "Plan",
    "description": "<p>Get all plans by pagination</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"page\": 1,\n    \"total_docs\": 3,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a7eaa8408644b31db10f108\",\n            \"last_modified\": \"2018-02-10T08:36:29.384Z\",\n            \"date_created\": \"2018-02-10T08:17:08.499Z\",\n            \"name\": \"Economy\",\n            \"__v\": 0,\n            \"description\": \"An Economy plan to subscribe\"\n        },\n        {\n            \"_id\": \"5a7eaaa708644b31db10f109\",\n            \"last_modified\": \"2018-02-10T08:17:43.338Z\",\n            \"date_created\": \"2018-02-10T08:17:43.338Z\",\n            \"name\": \"Starter\",\n            \"description\": \"A starter plan to subscribe\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5a7eb05429edd235c2e6edf5\",\n            \"last_modified\": \"2018-02-10T08:41:56.299Z\",\n            \"date_created\": \"2018-02-10T08:41:56.299Z\",\n            \"name\": \"Legend\",\n            \"description\": \"A Legend plan to subscribe\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/plan.js",
    "groupTitle": "Plan"
  },
  {
    "type": "PUT",
    "url": "https://sheba-auth.herokuapp.com/plans/:id",
    "title": "Update a Plan",
    "name": "UpdatePlan",
    "group": "Plan",
    "description": "<p>Update a single plan</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name  of  Plan to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>the description the plan to be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\n{\n\t\"name\":\t\t\t\"Economy\",\n\t\"description\":\t\"A Economy plan to subscribe\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a7eaa8408644b31db10f108\",\n    \"last_modified\": \"2018-02-10T08:56:07.177Z\",\n    \"date_created\": \"2018-02-10T08:17:08.499Z\",\n    \"name\": \"Economy\",\n    \"description\": \"An Economy plan to subscribe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/plan.js",
    "groupTitle": "Plan"
  },
  {
    "type": "POST",
    "url": "https://sheba-subscibe.herokuapp.com/subscription/",
    "title": "Create Subscription",
    "name": "CreatSubscription",
    "group": "Subscription",
    "description": "<p>Creates a new Subscription.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plan_id",
            "description": "<p>the id of the plan of the user subscribed to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>the id of the user that is subscribing to the plan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"plan_id\":               \"5a7eaaa708644b31db10f109\",\n  \"user_id\":               \"5a7e869e8b822916071d7ce6\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 201 Created\n {\n           \"_id\": \"5a7ed844c0e9ca53e7ea9327\",\n           \"last_modified\": \"2018-02-10T11:51:37.910Z\",\n           \"date_created\": \"2018-02-10T11:32:20.079Z\",\n           \"plan_id\": {\n               \"_id\": \"5a7eb05429edd235c2e6edf5\",\n               \"last_modified\": \"2018-02-10T08:41:56.299Z\",\n               \"name\": \"Legend\",\n               \"description\": \"A Legend plan to subscribe\"\n           },\n           \"user_id\": {\n               \"_id\": \"5a7e869e8b822916071d7ce6\",\n               \"last_modified\": \"2018-02-10T08:22:06.199Z\",\n               \"date_created\": \"2018-02-10T05:43:59.052Z\",\n               \"username\": \"mamo@sheba.com\",\n               \"role\": \"client\",\n               \"isActive\": false\n           },\n           \"__v\": 0,\n           \"isActive\": true\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/subscribe.js",
    "groupTitle": "Subscription"
  },
  {
    "type": "DELETE",
    "url": "https://sheba-subscibe.herokuapp.com/subscription/:id",
    "title": "Delete a Single Subscription",
    "name": "DeleteSubscription",
    "group": "Subscription",
    "description": "<p>Delete a single Subscription</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a7edf46f92a495f85f819c7\",\n    \"last_modified\": \"2018-02-10T12:17:42.371Z\",\n    \"date_created\": \"2018-02-10T12:02:14.208Z\",\n    \"plan_id\": {\n        \"_id\": \"5a7eb05429edd235c2e6edf5\",\n        \"last_modified\": \"2018-02-10T08:41:56.299Z\",\n        \"name\": \"Legend\",\n        \"description\": \"A Legend plan to subscribe\"\n    },\n    \"user_id\": {\n        \"_id\": \"5a7e869e8b822916071d7ce6\",\n        \"last_modified\": \"2018-02-10T08:22:06.199Z\",\n        \"date_created\": \"2018-02-10T05:43:59.052Z\",\n        \"username\": \"mamo@sheba.com\",\n        \"role\": \"client\",\n        \"isActive\": false\n    },\n    \"isActive\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/subscribe.js",
    "groupTitle": "Subscription"
  },
  {
    "type": "GET",
    "url": "https://sheba-subscibe.herokuapp.com/subscription/:id",
    "title": "Get a single subscription",
    "name": "GetSubscription",
    "group": "Subscription",
    "description": "<p>Get all Get a single subscription</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n           \"_id\": \"5a7edf88f92a495f85f819c8\",\n           \"last_modified\": \"2018-02-10T12:03:20.810Z\",\n           \"date_created\": \"2018-02-10T12:03:20.810Z\",\n           \"plan_id\": {\n               \"_id\": \"5a7eaa8408644b31db10f108\",\n               \"last_modified\": \"2018-02-10T08:56:07.177Z\",\n               \"name\": \"Economy\",\n               \"description\": \"An Economy plan to subscribe\"\n           },\n           \"user_id\": {\n               \"_id\": \"5a7e869e8b822916071d7ce6\",\n               \"last_modified\": \"2018-02-10T08:22:06.199Z\",\n               \"date_created\": \"2018-02-10T05:43:59.052Z\",\n               \"username\": \"mamo@sheba.com\",\n               \"role\": \"client\",\n               \"isActive\": false\n           },\n           \"__v\": 0,\n           \"isActive\": true\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/subscribe.js",
    "groupTitle": "Subscription"
  },
  {
    "type": "GET",
    "url": "https://sheba-subscibe.herokuapp.com/Subscriptiones/:id",
    "title": "Get a Single Subscription",
    "name": "GetSubscription",
    "group": "Subscription",
    "description": "<p>Get a single Subscription</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5a75ba9cb39f7e3699ef85cb\",\n    \"last_modified\": \"2018-02-03T13:35:24.583Z\",\n    \"percent_of_Subscription\": 75,\n    \"communicating\": true,\n    \"profile2\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"profile1\": {\n        \"_id\": \"5a75b167af44b3299cb3f131\",\n        \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n        \"date_created\": \"2018-02-03T12:56:07.463Z\",\n        \"email\": \"mamit@gebeya.com\",\n        \"user\": \"5a75b167af44b3299cb3f130\",\n        \"picture\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/subscribe.js",
    "groupTitle": "Subscription"
  },
  {
    "type": "GET",
    "url": "https://sheba-subscibe.herokuapp.com/subscription/plan/:id",
    "title": "Get a all subscription for one plan",
    "name": "GetSubscriptionForAPlan",
    "group": "Subscription",
    "description": "<p>Get the subscriptions that belongs to a singel plan belongs to by passing the plan id in the url.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"page\": 1,\n    \"total_docs\": 1,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a7ef7c6c5e90075530bb9a3\",\n            \"last_modified\": \"2018-02-10T13:47:37.916Z\",\n            \"date_created\": \"2018-02-10T13:46:46.284Z\",\n            \"plan_id\": {\n                \"_id\": \"5a7eaaa708644b31db10f109\",\n                \"last_modified\": \"2018-02-10T08:17:43.338Z\",\n                \"name\": \"Starter\",\n                \"description\": \"A starter plan to subscribe\"\n            },\n            \"user_id\": {\n                \"_id\": \"5a7e869e8b822916071d7ce6\",\n                \"last_modified\": \"2018-02-10T08:22:06.199Z\",\n                \"date_created\": \"2018-02-10T05:43:59.052Z\",\n                \"username\": \"mamo@sheba.com\",\n                \"role\": \"client\",\n                \"isActive\": false\n            },\n            \"__v\": 0,\n            \"isActive\": true\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/subscribe.js",
    "groupTitle": "Subscription"
  },
  {
    "type": "GET",
    "url": "https://sheba-subscibe.herokuapp.com/subscription/user/:id",
    "title": "Get a single subscription for one user",
    "name": "GetSubscriptionForAUser",
    "group": "Subscription",
    "description": "<p>Get the subscription a user belongs to by passing the user id in the url.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n           \"_id\": \"5a7edf88f92a495f85f819c8\",\n           \"last_modified\": \"2018-02-10T12:03:20.810Z\",\n           \"date_created\": \"2018-02-10T12:03:20.810Z\",\n           \"plan_id\": {\n               \"_id\": \"5a7eaa8408644b31db10f108\",\n               \"last_modified\": \"2018-02-10T08:56:07.177Z\",\n               \"name\": \"Economy\",\n               \"description\": \"An Economy plan to subscribe\"\n           },\n           \"user_id\": {\n               \"_id\": \"5a7e869e8b822916071d7ce6\",\n               \"last_modified\": \"2018-02-10T08:22:06.199Z\",\n               \"date_created\": \"2018-02-10T05:43:59.052Z\",\n               \"username\": \"mamo@sheba.com\",\n               \"role\": \"client\",\n               \"isActive\": false\n           },\n           \"__v\": 0,\n           \"isActive\": true\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/subscribe.js",
    "groupTitle": "Subscription"
  },
  {
    "type": "GET",
    "url": "https://sheba-subscibe.herokuapp.com/subscription",
    "title": "Get Subscription By Pagination",
    "name": "GetSubscriptionPagination",
    "group": "Subscription",
    "description": "<p>Get all Subscription by pagination</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"page\": 1,\n    \"total_docs\": 2,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a7edf46f92a495f85f819c7\",\n            \"last_modified\": \"2018-02-10T12:02:14.208Z\",\n            \"date_created\": \"2018-02-10T12:02:14.208Z\",\n            \"plan_id\": {\n                \"_id\": \"5a7eaaa708644b31db10f109\",\n                \"last_modified\": \"2018-02-10T08:17:43.338Z\",\n                \"name\": \"Starter\",\n                \"description\": \"A starter plan to subscribe\"\n            },\n            \"user_id\": {\n                \"_id\": \"5a7e869e8b822916071d7ce6\",\n                \"last_modified\": \"2018-02-10T08:22:06.199Z\",\n                \"date_created\": \"2018-02-10T05:43:59.052Z\",\n                \"username\": \"mamo@sheba.com\",\n                \"role\": \"client\",\n                \"isActive\": false\n            },\n            \"__v\": 0,\n            \"isActive\": true\n        },\n        {\n            \"_id\": \"5a7edf88f92a495f85f819c8\",\n            \"last_modified\": \"2018-02-10T12:03:20.810Z\",\n            \"date_created\": \"2018-02-10T12:03:20.810Z\",\n            \"plan_id\": {\n                \"_id\": \"5a7eaa8408644b31db10f108\",\n                \"last_modified\": \"2018-02-10T08:56:07.177Z\",\n                \"name\": \"Economy\",\n                \"description\": \"An Economy plan to subscribe\"\n            },\n            \"user_id\": {\n                \"_id\": \"5a7e869e8b822916071d7ce6\",\n                \"last_modified\": \"2018-02-10T08:22:06.199Z\",\n                \"date_created\": \"2018-02-10T05:43:59.052Z\",\n                \"username\": \"mamo@sheba.com\",\n                \"role\": \"client\",\n                \"isActive\": false\n            },\n            \"__v\": 0,\n            \"isActive\": true\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/subscribe.js",
    "groupTitle": "Subscription"
  },
  {
    "type": "PUT",
    "url": "https://sheba-subscibe.herokuapp.com/subscription/:id",
    "title": "update a Subscription",
    "name": "UpdateSubscription",
    "group": "Subscription",
    "description": "<p>Update a single Subscription</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plan_id",
            "description": "<p>the id of the plan of the user subscribed to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>the id of the user that is subscribing to the plan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"plan_id\":               \"5a7eb05429edd235c2e6edf5\",\n  \"user_id\":               \"5a7e869e8b822916071d7ce6\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a7edf46f92a495f85f819c7\",\n    \"last_modified\": \"2018-02-10T12:17:42.371Z\",\n    \"date_created\": \"2018-02-10T12:02:14.208Z\",\n    \"plan_id\": {\n        \"_id\": \"5a7eb05429edd235c2e6edf5\",\n        \"last_modified\": \"2018-02-10T08:41:56.299Z\",\n        \"name\": \"Legend\",\n        \"description\": \"A Legend plan to subscribe\"\n    },\n    \"user_id\": {\n        \"_id\": \"5a7e869e8b822916071d7ce6\",\n        \"last_modified\": \"2018-02-10T08:22:06.199Z\",\n        \"date_created\": \"2018-02-10T05:43:59.052Z\",\n        \"username\": \"mamo@sheba.com\",\n        \"role\": \"client\",\n        \"isActive\": false\n    },\n    \"isActive\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/subscribe.js",
    "groupTitle": "Subscription"
  },
  {
    "type": "DELETE",
    "url": "https://sheba-auth.herokuapp.com/users/:id",
    "title": "Delete a single user",
    "name": "DeleteUser",
    "group": "User",
    "description": "<p>Delete a single user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n           \"_id\": \"5a7e8a51bc157618d44d8278\",\n           \"last_modified\": \"2018-02-10T05:59:45.822Z\",\n           \"date_created\": \"2018-02-10T05:59:45.822Z\",\n           \"password\": \"$2a$10$FjgniSRH/ZN/tTDR9OvZWO4SGp7sTVvZi7pRG7RbsbwJr/a4JMkaS\",\n           \"username\": \"mao@sheba.com\",\n           \"__v\": 0,\n           \"isActive\": true\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "https://sheba-auth.herokuapp.com/users/",
    "title": "Get all users",
    "name": "GetAllUsers",
    "group": "User",
    "description": "<p>Get all users using pagination</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"page\": 1,\n    \"total_docs\": 2,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a7e869e8b822916071d7ce6\",\n            \"last_modified\": \"2018-02-10T05:43:59.052Z\",\n            \"date_created\": \"2018-02-10T05:43:59.052Z\",\n            \"password\": \"$2a$10$SM2GWZMqmW8UTZ3PJHcOJOY6LBVYu7cjNC3nY.H1nJJhoN8zAq9o6\",\n            \"username\": \"mamo@sheba.com\",\n            \"__v\": 0,\n            \"role\": \"client\",\n            \"isActive\": false\n        },\n        {\n            \"_id\": \"5a7e8a51bc157618d44d8278\",\n            \"last_modified\": \"2018-02-10T05:59:45.822Z\",\n            \"date_created\": \"2018-02-10T05:59:45.822Z\",\n            \"password\": \"$2a$10$FjgniSRH/ZN/tTDR9OvZWO4SGp7sTVvZi7pRG7RbsbwJr/a4JMkaS\",\n            \"username\": \"mao@sheba.com\",\n            \"__v\": 0,\n            \"isActive\": true\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "https://sheba-auth.herokuapp.com/users/:id",
    "title": "Get a single user",
    "name": "GetUser",
    "group": "User",
    "description": "<p>Get a single user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n           \"_id\": \"5a7e8a51bc157618d44d8278\",\n           \"last_modified\": \"2018-02-10T05:59:45.822Z\",\n           \"date_created\": \"2018-02-10T05:59:45.822Z\",\n           \"password\": \"$2a$10$FjgniSRH/ZN/tTDR9OvZWO4SGp7sTVvZi7pRG7RbsbwJr/a4JMkaS\",\n           \"username\": \"mao@sheba.com\",\n           \"__v\": 0,\n           \"isActive\": true\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "https://sheba-auth.herokuapp.com/users/login",
    "title": "User Login",
    "name": "LoginUser",
    "group": "User",
    "description": "<p>Creates a new User and corresponding Profile.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": " {\n\t\"username\": \"mao@gebeya.com\",\n\t\"password\": \"123456\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokne",
            "description": "<p>User token</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n    {\n    \"token\": {\n        \"_id\": \"5a7e8c00d07a671a0c9ef414\",\n        \"date_created\": \"2018-02-10T06:06:56.124Z\",\n        \"value\": \"gPzBV63Z9H6eIiIzNvPnUbh1QN4z+saIX2oNgsa3J/FAxmLFgKFgTkcf7cvSuT5GcfytrCxdqkK4\",\n        \"user\": {\n            \"_id\": \"5a7e8a51bc157618d44d8278\",\n            \"last_modified\": \"2018-02-10T05:59:45.822Z\",\n            \"date_created\": \"2018-02-10T05:59:45.822Z\",\n            \"username\": \"mao@sheba.com\",\n            \"isActive\": true\n        },\n        \"revoked\": false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "https://sheba-auth.herokuapp.com/users/logout",
    "title": "User Logout",
    "name": "LogoutUser",
    "group": "User",
    "description": "<p>logouts out the login user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer gPzBV63Z9H6eIiIzNvPnUbh1QN4z+saIX2oNgsa3J/FAxmLFgKFgTkcf7cvSuT5GcfytrCxdqkK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n {\n    \"logged_out\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "https://sheba-auth.herokuapp.com/users/signup",
    "title": "User Signup",
    "name": "SignupUser",
    "group": "User",
    "description": "<p>Creates a new User and corresponding User Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": " {\n\t\"email\": \"mao@sheba.com\",\n \t\"password\": \"123456\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "last_modified",
            "description": "<p>last date modified</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>last date modified</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Is the user Active</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"_id\": \"5a7e8a51bc157618d44d8278\",\n    \"last_modified\": \"2018-02-10T05:59:45.822Z\",\n    \"date_created\": \"2018-02-10T05:59:45.822Z\",\n    \"username\": \"mao@sheba.com\",\n    \"isActive\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "https://sheba-auth.herokuapp.com/users/:id",
    "title": "Update a User",
    "name": "UpdateUser",
    "group": "User",
    "description": "<p>Update a single User, you can pass all information on the user model except password, you can't change password using this end point.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>User role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone_number",
            "description": "<p>User emailst_name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\n{\n\n  \"role\":           \"client\",\n  \"isActive\":      false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a7e869e8b822916071d7ce6\",\n    \"last_modified\": \"2018-02-10T05:43:59.052Z\",\n    \"date_created\": \"2018-02-10T05:43:59.052Z\",\n    \"username\": \"mamo@sheba.com\",\n    \"role\": \"client\",\n    \"isActive\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "https://sheba-auth.herokuapp.com/users/:id",
    "title": "Update a User's password",
    "name": "UpdateUserPassword",
    "group": "User",
    "description": "<p>Update a single User by passing the new password in the body</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\n  \"password\":   \"new_password\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a7e869e8b822916071d7ce6\",\n    \"last_modified\": \"2018-02-10T05:43:59.052Z\",\n    \"date_created\": \"2018-02-10T05:43:59.052Z\",\n    \"username\": \"mamo@sheba.com\",\n    \"role\": \"client\",\n    \"isActive\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
