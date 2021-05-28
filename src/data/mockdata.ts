import {IStepData} from "../components/TestRunner/TestRunner";

 const mockData: IStepData[] = [
  { action: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", expectedResult: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", actualResult: "", isImportant:true},
  { action: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", expectedResult: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", actualResult: "" },
  { action: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", expectedResult: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", actualResult: "" },
   { action: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", expectedResult: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", actualResult: "" },
  { action: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", expectedResult: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", actualResult: "" },
  { action: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", expectedResult: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", actualResult: "" },

];

export const values = [
                    [
                        {
                            "fieldId": 2000001,
                            "name": "Action",
                            "value": "A1",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000002,
                            "name": "Expected result",
                            "value": "E1",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000003,
                            "name": "Critical",
                            "value": false,
                            "type": "BoolFieldValue"
                        },
                        {
                            "fieldId": 2000009,
                            "name": "Step Type",
                            "type": "ChoiceFieldValue",
                            "values": [
                                {
                                    "id": 1,
                                    "name": "init step",
                                    "type": "ChoiceOptionReference"
                                }
                            ]
                        },
                        {
                            "fieldId": 2000004,
                            "name": "Actual result",
                            "type": "WikiTextFieldValue",
                            "value": ""
                        },
                        {
                            "fieldId": 2000005,
                            "name": "Result",
                            "type": "TextFieldValue",
                            "value": ""
                        }
                    ],
                    [
                        {
                            "fieldId": 2000001,
                            "name": "Action",
                            "value": "A2",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000002,
                            "name": "Expected result",
                            "value": "E2",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000003,
                            "name": "Critical",
                            "value": false,
                            "type": "BoolFieldValue"
                        },
                        {
                            "fieldId": 2000009,
                            "name": "Step Type",
                            "type": "ChoiceFieldValue",
                            "values": [
                                {
                                    "id": 2,
                                    "name": "run step",
                                    "type": "ChoiceOptionReference"
                                }
                            ]
                        },
                        {
                            "fieldId": 2000004,
                            "name": "Actual result",
                            "type": "WikiTextFieldValue",
                            "value": ""
                        },
                        {
                            "fieldId": 2000005,
                            "name": "Result",
                            "type": "TextFieldValue",
                            "value": ""
                        }
                    ],
                    [
                        {
                            "fieldId": 2000001,
                            "name": "Action",
                            "value": "A3",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000002,
                            "name": "Expected result",
                            "value": "E3",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000003,
                            "name": "Critical",
                            "value": false,
                            "type": "BoolFieldValue"
                        },
                        {
                            "fieldId": 2000009,
                            "name": "Step Type",
                            "type": "ChoiceFieldValue",
                            "values": [
                                {
                                    "id": 2,
                                    "name": "run step",
                                    "type": "ChoiceOptionReference"
                                }
                            ]
                        },
                        {
                            "fieldId": 2000004,
                            "name": "Actual result",
                            "type": "WikiTextFieldValue",
                            "value": ""
                        },
                        {
                            "fieldId": 2000005,
                            "name": "Result",
                            "type": "TextFieldValue",
                            "value": ""
                        }
                    ],
                    [
                        {
                            "fieldId": 2000001,
                            "name": "Action",
                            "value": "A4",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000002,
                            "name": "Expected result",
                            "value": "E4",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000003,
                            "name": "Critical",
                            "value": false,
                            "type": "BoolFieldValue"
                        },
                        {
                            "fieldId": 2000009,
                            "name": "Step Type",
                            "type": "ChoiceFieldValue",
                            "values": [
                                {
                                    "id": 2,
                                    "name": "run step",
                                    "type": "ChoiceOptionReference"
                                }
                            ]
                        },
                        {
                            "fieldId": 2000004,
                            "name": "Actual result",
                            "type": "WikiTextFieldValue",
                            "value": ""
                        },
                        {
                            "fieldId": 2000005,
                            "name": "Result",
                            "type": "TextFieldValue",
                            "value": ""
                        }
                    ],
                    [
                        {
                            "fieldId": 2000001,
                            "name": "Action",
                            "value": "A5",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000002,
                            "name": "Expected result",
                            "value": "E5",
                            "type": "WikiTextFieldValue"
                        },
                        {
                            "fieldId": 2000003,
                            "name": "Critical",
                            "value": false,
                            "type": "BoolFieldValue"
                        },
                        {
                            "fieldId": 2000009,
                            "name": "Step Type",
                            "type": "ChoiceFieldValue",
                            "values": [
                                {
                                    "id": 3,
                                    "name": "shutdown step",
                                    "type": "ChoiceOptionReference"
                                }
                            ]
                        },
                        {
                            "fieldId": 2000004,
                            "name": "Actual result",
                            "type": "WikiTextFieldValue",
                            "value": ""
                        },
                        {
                            "fieldId": 2000005,
                            "name": "Result",
                            "type": "TextFieldValue",
                            "value": ""
                        }
                    ]
                ]
              
export default mockData;