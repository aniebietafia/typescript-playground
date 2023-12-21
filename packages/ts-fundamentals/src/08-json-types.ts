type JSONPrimitive = string | number | boolean | null;

// JSON Type Exercise
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

// Positive Test Cases
isJSON("hello");
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({ greeting: "hello" });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, "foo"] } });

// Negative Test Cases
// @ts-expect-error
isJSON(() => "");

// @ts-expect-error
isJSON(class {});

// @ts-expect-error
isJSON(undefined);

//@ts-expect-error
isJSON(bigint(143));

//@ts-expect-error
isJSON(isJSON);
