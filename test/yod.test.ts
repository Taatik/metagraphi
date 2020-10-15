import { Text } from "../src/index";

describe.each`
  description                              | hebrew     | transliteration
  ${"consonantal yod"}                     | ${"יָם"}   | ${"γιαμ"}
  ${"consonantal yod with hiriq as vowel"} | ${"יַיִן"} | ${"γιαγιν"}
`("Consonantal Yod:", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});

// ${"hiriq followed by consonantal yod"}   | ${""}      | ${""}
//   ${"patach yod"}                          | ${""}      | ${""}

xdescribe.each`
  description                       | hebrew             | transliteration
  ${"hiriq yod: medial"}            | ${"סִיר"}          | ${"σιρ"}
  ${"hiriq yod: final"}             | ${"אֲנִי"}         | ${"ανη"}
  ${"hiriq yod: plural marker"}     | ${"דְּבָרִים"}     | ${"ντεβαρειμ"}
  ${"hiriq yod: final with maqqef"} | ${"וַֽיְהִי־כֵֽן"} | ${"βαγιεη-χεν"}
`("Hiriq Yod:", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});

xdescribe.each`
  description           | hebrew       | transliteration
  ${"medial tsere-yod"} | ${"אֵין"}    | ${"εν"}
  ${"final tsere-yod"}  | ${"רִגְעֵי"} | ${"rige"}
`("Tsere Yod:", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
