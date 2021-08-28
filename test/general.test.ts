import { Text } from "../src/index";

describe.each`
  description                 | hebrew                             | transliteration
  ${"no special features"}    | ${"לֶחֶם"}                         | ${"λεχεμ"}
  ${"gemination"}             | ${"רַנֵּן"}                        | ${"ρανεν"}
  ${"divine name"}            | ${"יְהוָ֣ה"}                       | ${"Αδωνάη"}
  ${"furtive patach, chet"}   | ${"שָׂמֵחַ"}                        | ${"σαμεαχ"}
  ${"furtive patach, ayin"}   | ${"שָׁמֵעַ"}                       | ${"σσαμεα"}
  ${"furtive patach, he"}     | ${"גָבֹהַּ"}                       | ${"γαβωα"}
  ${"3ms suffix"}             | ${"דְּבָרָ֖יו"}                    | ${"ντεβαράβ"}
  ${"mixed with latin chars"} | ${"רוּחַ, אֲבֹותֵינוּ (לְעֹולָם)"} | ${"ρουαχ, αβωθενου (λεωλαμ)"}
`("General Rules:", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
