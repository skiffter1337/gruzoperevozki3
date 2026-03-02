import { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { getDictionary } from "@/lib/dictionaries";
import { buildLocalizedPath } from "@/lib/localized-paths";
import styles from "@/app/[locale]/terms.module.scss";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const pageTitle = "תקנון האתר MAAVAR";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = pageTitle;

  return {
    title,
    description: title,
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const breadcrumbs = [
    { label: dictionary.header.nav.home, href: buildLocalizedPath(locale, "home") },
    { label: pageTitle, current: true },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>{pageTitle}</h1>
          <div className={styles.content}>
            <p className={styles.text}>תקנון האתר MAAVAR (maavar.co.il)</p>
            <p className={styles.text}>כתובת ליצירת קשר: maavar.israel@gmail.com</p>
            <p className={styles.text}>תאריך עדכון אחרון: 01.03.2026</p>

            <ol className={styles.list}>
              <li>
                <p className={styles.text}>
                  הגדרות בתקנון זה: ״האתר״ — אתר האינטרנט בכתובת maavar.co.il. ״המשתמש״ — כל
                  אדם או תאגיד הניגש לאתר. ״גורם חיצוני״ — מובילים, בעלי מקצוע, מפרסמים
                  ואנשים אחרים המספקים מידע לפרסום באתר. ״התקנון״ — מסמך זה המסדיר את
                  השימוש באתר.
                </p>
              </li>
              <li>
                <p className={styles.text}>קבלת התנאים ותוקף משפטי</p>
                <ol className={styles.sublist}>
                  <li>
                    <p className={styles.text}>
                      תקנון זה מהווה הסכם משפטי מחייב בין המשתמש לבין האתר.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      כל שימוש באתר מהווה הסכמה מלאה ובלתי מסויגת של המשתמש לכל הוראות התקנון.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      אם המשתמש אינו מסכים לאחד מתנאי התקנון, עליו להפסיק מיד את השימוש באתר.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר רשאי לשנות ו/או לעדכן תקנון זה באופן חד־צדדי וללא הודעה מוקדמת.
                      הנוסח המעודכן ייכנס לתוקף עם פרסומו.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      המשך שימוש באתר לאחר פרסום השינויים ייחשב כהסכמה להם.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האמור בתקנון זה בלשון זכר — אף בלשון נקבה במשמע, ולהפך.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p className={styles.text}>אופי פעילות האתר</p>
                <ol className={styles.sublist}>
                  <li>
                    <p className={styles.text}>
                      האתר הינו פלטפורמה מידעית בלבד, הפועלת כמתווך בין המשתמשים לבין גורמים
                      חיצוניים.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      באתר ניתן ליצור קשר ולקבל הצעות מחיר מבעלי מקצוע שונים, במישרין או
                      באמצעות מסירת פרטיו בטופס ייעודי.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר אינו מספק שירותי הובלה, לוגיסטיקה או שירותים נלווים.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר אינו צד להסכמים הנכרתים בין המשתמש לבין גורמים חיצוניים.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר אינו בודק הכשרה מקצועית, רישיונות, ביטוחים, היתרים או את נכונות
                      המידע הנמסר על ידי גורמים חיצוניים.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האחריות המלאה לתוכן המידע המתפרסם באתר אודות גורמים חיצוניים, לרבות
                      נכונות פרטיהם, מוטלת על הגורם שמסר אותו.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      מידע המפורסם באתר אינו מהווה המלצה, אישור או התחייבות.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p className={styles.text}>הגבלת אחריות</p>
                <ol className={styles.sublist}>
                  <li>
                    <p className={styles.text}>
                      כל החומרים המתפרסמים באתר אינם מהווים ייעוץ מקצועי ואינם מחליפים אותו.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      השימוש בחומרי האתר נעשה באחריות המשתמש בלבד.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      המשתמש נושא באחריות מלאה ל: השימוש במידע; קבלת החלטות; כריתת הסכמים; כל
                      תוצאה של התקשרות עם גורמים חיצוניים.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר לא יישא באחריות ל: נזק ישיר או עקיף; אובדן רווחים; הפרת הצהרות או
                      התחייבויות מצד גורמים חיצוניים; נזק לרכוש או לבריאות; מעשה או מחדל של
                      גורמים חיצוניים; תקלות טכניות, שיבושים או אובדן נתונים; אי־זמינות זמנית
                      או קבועה של האתר.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p className={styles.text}>שימוש באתר</p>
                <ol className={styles.sublist}>
                  <li>
                    <p className={styles.text}>האתר מיועד לשימוש אישי.</p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      חל איסור: לעשות שימוש מסחרי ללא אישור בכתב; להתערב בשרתים או במערכות;
                      להשתמש באמצעים אוטומטיים לאיסוף נתונים; להפיץ תוכנה זדונית; להעתיק או
                      להפיץ חומרים ללא אישור.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר רשאי להגביל או להפסיק את גישת המשתמש ללא הודעה מוקדמת.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר רשאי לשנות את תנאי השימוש ללא הודעה מוקדמת.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p className={styles.text}>מדיניות פרטיות ונתונים אישיים</p>
                <ol className={styles.sublist}>
                  <li>
                    <p className={styles.text}>גלישה באתר אינה מחייבת רישום.</p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      בעת שליחת פנייה ו/או קבלת מענה, על המשתמש למסור את שמו, כתובת הדוא״ל
                      שלו, מספר הטלפון שלו וכיו״ב.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      במסירת הנתונים נותן המשתמש את הסכמתו לעיבודם ולקבלת מסרים שיווקיים. הוא
                      רשאי להסיר עצמו בכל עת.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר אינו מעביר נתונים לצדדים שלישיים ללא הסכמת המשתמש מראש, אלא אם כן
                      הדבר נדרש על פי דין ו/או מכוח צו שיפוטי.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר רשאי להשתמש במידע לצרכים סטטיסטיים, ניתוח ושיפור השירות.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      האתר עשוי להשתמש בקובצי Cookie לצורך תפעול תקין, איסוף נתונים ואבטחה.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      על אף אמצעי האבטחה, אין מובטחת הגנה מוחלטת על המידע.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p className={styles.text}>קניין רוחני</p>
                <ol className={styles.sublist}>
                  <li>
                    <p className={styles.text}>
                      כל הזכויות בקוד המקור, במבנה, בעיצוב, בטקסטים וברכיבי הממשק שייכות לאתר.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      הזכויות בחומרים שסופקו על ידי גורמים חיצוניים שייכות להם.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      כל העתקה, שכפול, פרסום או שימוש ללא אישור בכתב אסורים.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p className={styles.text}>תקופת התיישנות</p>
                <ol className={styles.sublist}>
                  <li>
                    <p className={styles.text}>
                      תקופת הגשת כל תביעה נגד האתר מוגבלת לשישה חודשים.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      הצדדים רואים בתקופה זו כהסכמה לקיצור תקופת ההתיישנות בהתאם לחוק ההתיישנות,
                      תשי״ח–1958.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p className={styles.text}>דין וסמכות שיפוט</p>
                <ol className={styles.sublist}>
                  <li>
                    <p className={styles.text}>על תקנון זה יחולו דיני מדינת ישראל.</p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      הסמכות המקומית הבלעדית נתונה לבית המשפט המוסמך בעיר תל־אביב–יפו.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p className={styles.text}>פרטי קשר לפניות: maavar.israel@gmail.com</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
