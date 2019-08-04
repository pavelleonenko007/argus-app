/**
 * speakingurl
 * @version v13.0.0
 * @link http://pid.github.io/speakingurl/
 * @license BSD
 * @author Sascha Droste
 */

!function(a) {
    "use strict";
    var e= {
        "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "Ae", "Å": "A", "Æ": "AE", "Ç": "C", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "Ð": "D", "Ñ": "N", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "Oe", "Ő": "O", "Ø": "O", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "Ue", "Ű": "U", "Ý": "Y", "Þ": "TH", "ß": "ss", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "ae", "å": "a", "æ": "ae", "ç": "c", "è": "e", "é": "e", "ê": "e", "ë": "e", "ì": "i", "í": "i", "î": "i", "ï": "i", "ð": "d", "ñ": "n", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "oe", "ő": "o", "ø": "o", "ù": "u", "ú": "u", "û": "u", "ü": "ue", "ű": "u", "ý": "y", "þ": "th", "ÿ": "y", "ẞ": "SS", "ا": "a", "أ": "a", "إ": "i", "آ": "aa", "ؤ": "u", "ئ": "e", "ء": "a", "ب": "b", "ت": "t", "ث": "th", "ج": "j", "ح": "h", "خ": "kh", "د": "d", "ذ": "th", "ر": "r", "ز": "z", "س": "s", "ش": "sh", "ص": "s", "ض": "dh", "ط": "t", "ظ": "z", "ع": "a", "غ": "gh", "ف": "f", "ق": "q", "ك": "k", "ل": "l", "م": "m", "ن": "n", "ه": "h", "و": "w", "ي": "y", "ى": "a", "ة": "h", "ﻻ": "la", "ﻷ": "laa", "ﻹ": "lai", "ﻵ": "laa", "گ": "g", "چ": "ch", "پ": "p", "ژ": "zh", "ک": "k", "ی": "y", "َ": "a", "ً": "an", "ِ": "e", "ٍ": "en", "ُ": "u", "ٌ": "on", "ْ": "", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "က": "k", "ခ": "kh", "ဂ": "g", "ဃ": "ga", "င": "ng", "စ": "s", "ဆ": "sa", "ဇ": "z", "စျ": "za", "ည": "ny", "ဋ": "t", "ဌ": "ta", "ဍ": "d", "ဎ": "da", "ဏ": "na", "တ": "t", "ထ": "ta", "ဒ": "d", "ဓ": "da", "န": "n", "ပ": "p", "ဖ": "pa", "ဗ": "b", "ဘ": "ba", "မ": "m", "ယ": "y", "ရ": "ya", "လ": "l", "ဝ": "w", "သ": "th", "ဟ": "h", "ဠ": "la", "အ": "a", "ြ": "y", "ျ": "ya", "ွ": "w", "ြွ": "yw", "ျွ": "ywa", "ှ": "h", "ဧ": "e", "၏": "-e", "ဣ": "i", "ဤ": "-i", "ဉ": "u", "ဦ": "-u", "ဩ": "aw", "သြော": "aw", "ဪ": "aw", "၀": "0", "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "္": "", "့": "", "း": "", "č": "c", "ď": "d", "ě": "e", "ň": "n", "ř": "r", "š": "s", "ť": "t", "ů": "u", "ž": "z", "Č": "C", "Ď": "D", "Ě": "E", "Ň": "N", "Ř": "R", "Š": "S", "Ť": "T", "Ů": "U", "Ž": "Z", "ހ": "h", "ށ": "sh", "ނ": "n", "ރ": "r", "ބ": "b", "ޅ": "lh", "ކ": "k", "އ": "a", "ވ": "v", "މ": "m", "ފ": "f", "ދ": "dh", "ތ": "th", "ލ": "l", "ގ": "g", "ޏ": "gn", "ސ": "s", "ޑ": "d", "ޒ": "z", "ޓ": "t", "ޔ": "y", "ޕ": "p", "ޖ": "j", "ޗ": "ch", "ޘ": "tt", "ޙ": "hh", "ޚ": "kh", "ޛ": "th", "ޜ": "z", "ޝ": "sh", "ޞ": "s", "ޟ": "d", "ޠ": "t", "ޡ": "z", "ޢ": "a", "ޣ": "gh", "ޤ": "q", "ޥ": "w", "ަ": "a", "ާ": "aa", "ި": "i", "ީ": "ee", "ު": "u", "ޫ": "oo", "ެ": "e", "ޭ": "ey", "ޮ": "o", "ޯ": "oa", "ް": "", "ა": "a", "ბ": "b", "გ": "g", "დ": "d", "ე": "e", "ვ": "v", "ზ": "z", "თ": "t", "ი": "i", "კ": "k", "ლ": "l", "მ": "m", "ნ": "n", "ო": "o", "პ": "p", "ჟ": "zh", "რ": "r", "ს": "s", "ტ": "t", "უ": "u", "ფ": "p", "ქ": "k", "ღ": "gh", "ყ": "q", "შ": "sh", "ჩ": "ch", "ც": "ts", "ძ": "dz", "წ": "ts", "ჭ": "ch", "ხ": "kh", "ჯ": "j", "ჰ": "h", "α": "a", "β": "v", "γ": "g", "δ": "d", "ε": "e", "ζ": "z", "η": "i", "θ": "th", "ι": "i", "κ": "k", "λ": "l", "μ": "m", "ν": "n", "ξ": "ks", "ο": "o", "π": "p", "ρ": "r", "σ": "s", "τ": "t", "υ": "y", "φ": "f", "χ": "x", "ψ": "ps", "ω": "o", "ά": "a", "έ": "e", "ί": "i", "ό": "o", "ύ": "y", "ή": "i", "ώ": "o", "ς": "s", "ϊ": "i", "ΰ": "y", "ϋ": "y", "ΐ": "i", "Α": "A", "Β": "B", "Γ": "G", "Δ": "D", "Ε": "E", "Ζ": "Z", "Η": "I", "Θ": "TH", "Ι": "I", "Κ": "K", "Λ": "L", "Μ": "M", "Ν": "N", "Ξ": "KS", "Ο": "O", "Π": "P", "Ρ": "R", "Σ": "S", "Τ": "T", "Υ": "Y", "Φ": "F", "Χ": "X", "Ψ": "PS", "Ω": "O", "Ά": "A", "Έ": "E", "Ί": "I", "Ό": "O", "Ύ": "Y", "Ή": "I", "Ώ": "O", "Ϊ": "I", "Ϋ": "Y", "ā": "a", "ē": "e", "ģ": "g", "ī": "i", "ķ": "k", "ļ": "l", "ņ": "n", "ū": "u", "Ā": "A", "Ē": "E", "Ģ": "G", "Ī": "I", "Ķ": "k", "Ļ": "L", "Ņ": "N", "Ū": "U", "Ќ": "Kj", "ќ": "kj", "Љ": "Lj", "љ": "lj", "Њ": "Nj", "њ": "nj", "Тс": "Ts", "тс": "ts", "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n", "ś": "s", "ź": "z", "ż": "z", "Ą": "A", "Ć": "C", "Ę": "E", "Ł": "L", "Ń": "N", "Ś": "S", "Ź": "Z", "Ż": "Z", "Є": "Ye", "І": "I", "Ї": "Yi", "Ґ": "G", "є": "ye", "і": "i", "ї": "yi", "ґ": "g", "ă": "a", "Ă": "A", "ș": "s", "Ș": "S", "ț": "t", "Ț": "T", "ţ": "t", "Ţ": "T", "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "e", "ж": "zh", "з": "z", "и": "i", "й": "j", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ф": "f", "х": "h", "ц": "c", "ч": "ch", "ш": "sh", "щ": "sch", "ъ": "", "ы": "y", "ь": "", "э": "e", "ю": "yu", "я": "ya", "А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E", "Ё": "e", "Ж": "Zh", "З": "Z", "И": "I", "Й": "J", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R", "С": "S", "Т": "T", "У": "U", "Ф": "F", "Х": "H", "Ц": "C", "Ч": "Ch", "Ш": "Sh", "Щ": "Sch", "Ъ": "", "Ы": "Y", "Ь": "", "Э": "E", "Ю": "Yu", "Я": "Ya", "ђ": "dj", "ј": "j", "ћ": "c", "џ": "dz", "Ђ": "Dj", "Ј": "j", "Ћ": "C", "Џ": "Dz", "ľ": "l", "ĺ": "l", "ŕ": "r", "Ľ": "L", "Ĺ": "L", "Ŕ": "R", "ş": "s", "Ş": "S", "ı": "i", "İ": "I", "ğ": "g", "Ğ": "G", "ả": "a", "Ả": "A", "ẳ": "a", "Ẳ": "A", "ẩ": "a", "Ẩ": "A", "đ": "d", "Đ": "D", "ẹ": "e", "Ẹ": "E", "ẽ": "e", "Ẽ": "E", "ẻ": "e", "Ẻ": "E", "ế": "e", "Ế": "E", "ề": "e", "Ề": "E", "ệ": "e", "Ệ": "E", "ễ": "e", "Ễ": "E", "ể": "e", "Ể": "E", "ỏ": "o", "ọ": "o", "Ọ": "o", "ố": "o", "Ố": "O", "ồ": "o", "Ồ": "O", "ổ": "o", "Ổ": "O", "ộ": "o", "Ộ": "O", "ỗ": "o", "Ỗ": "O", "ơ": "o", "Ơ": "O", "ớ": "o", "Ớ": "O", "ờ": "o", "Ờ": "O", "ợ": "o", "Ợ": "O", "ỡ": "o", "Ỡ": "O", "Ở": "o", "ở": "o", "ị": "i", "Ị": "I", "ĩ": "i", "Ĩ": "I", "ỉ": "i", "Ỉ": "i", "ủ": "u", "Ủ": "U", "ụ": "u", "Ụ": "U", "ũ": "u", "Ũ": "U", "ư": "u", "Ư": "U", "ứ": "u", "Ứ": "U", "ừ": "u", "Ừ": "U", "ự": "u", "Ự": "U", "ữ": "u", "Ữ": "U", "ử": "u", "Ử": "ư", "ỷ": "y", "Ỷ": "y", "ỳ": "y", "Ỳ": "Y", "ỵ": "y", "Ỵ": "Y", "ỹ": "y", "Ỹ": "Y", "ạ": "a", "Ạ": "A", "ấ": "a", "Ấ": "A", "ầ": "a", "Ầ": "A", "ậ": "a", "Ậ": "A", "ẫ": "a", "Ẫ": "A", "ắ": "a", "Ắ": "A", "ằ": "a", "Ằ": "A", "ặ": "a", "Ặ": "A", "ẵ": "a", "Ẵ": "A", "“": '"', "”": '"', "‘": "'", "’": "'", "∂": "d", "ƒ": "f", "™": "(TM)", "©": "(C)", "œ": "oe", "Œ": "OE", "®": "(R)", "†": "+", "℠": "(SM)", "…": "...", "˚": "o", "º": "o", "ª": "a", "•": "*", "၊": ",", "။": ".", $: "USD", "€": "EUR", "₢": "BRN", "₣": "FRF", "£": "GBP", "₤": "ITL", "₦": "NGN", "₧": "ESP", "₩": "KRW", "₪": "ILS", "₫": "VND", "₭": "LAK", "₮": "MNT", "₯": "GRD", "₱": "ARS", "₲": "PYG", "₳": "ARA", "₴": "UAH", "₵": "GHS", "¢": "cent", "¥": "CNY", "元": "CNY", "円": "YEN", "﷼": "IRR", "₠": "EWE", "฿": "THB", "₨": "INR", "₹": "INR", "₰": "PF", "₺": "TRY", "؋": "AFN", "₼": "AZN", "лв": "BGN", "៛": "KHR", "₡": "CRC", "₸": "KZT", "ден": "MKD", "zł": "PLN", "₽": "RUB", "₾": "GEL"
    }
    ,
    n=["်",
    "ް"],
    t= {
        "ာ": "a", "ါ": "a", "ေ": "e", "ဲ": "e", "ိ": "i", "ီ": "i", "ို": "o", "ု": "u", "ူ": "u", "ေါင်": "aung", "ော": "aw", "ော်": "aw", "ေါ": "aw", "ေါ်": "aw", "်": "်", "က်": "et", "ိုက်": "aik", "ောက်": "auk", "င်": "in", "ိုင်": "aing", "ောင်": "aung", "စ်": "it", "ည်": "i", "တ်": "at", "ိတ်": "eik", "ုတ်": "ok", "ွတ်": "ut", "ေတ်": "it", "ဒ်": "d", "ိုဒ်": "ok", "ုဒ်": "ait", "န်": "an", "ာန်": "an", "ိန်": "ein", "ုန်": "on", "ွန်": "un", "ပ်": "at", "ိပ်": "eik", "ုပ်": "ok", "ွပ်": "ut", "န်ုပ်": "nub", "မ်": "an", "ိမ်": "ein", "ုမ်": "on", "ွမ်": "un", "ယ်": "e", "ိုလ်": "ol", "ဉ်": "in", "ံ": "an", "ိံ": "ein", "ုံ": "on", "ައް": "ah", "ަށް": "ah"
    }
    ,
    i= {
        en: {}
        ,
        az: {
            "ç": "c", "ə": "e", "ğ": "g", "ı": "i", "ö": "o", "ş": "s", "ü": "u", "Ç": "C", "Ə": "E", "Ğ": "G", "İ": "I", "Ö": "O", "Ş": "S", "Ü": "U"
        }
        ,
        cs: {
            "č": "c", "ď": "d", "ě": "e", "ň": "n", "ř": "r", "š": "s", "ť": "t", "ů": "u", "ž": "z", "Č": "C", "Ď": "D", "Ě": "E", "Ň": "N", "Ř": "R", "Š": "S", "Ť": "T", "Ů": "U", "Ž": "Z"
        }
        ,
        fi: {
            "ä": "a", "Ä": "A", "ö": "o", "Ö": "O"
        }
        ,
        hu: {
            "ä": "a", "Ä": "A", "ö": "o", "Ö": "O", "ü": "u", "Ü": "U", "ű": "u", "Ű": "U"
        }
        ,
        lt: {
            "ą": "a", "č": "c", "ę": "e", "ė": "e", "į": "i", "š": "s", "ų": "u", "ū": "u", "ž": "z", "Ą": "A", "Č": "C", "Ę": "E", "Ė": "E", "Į": "I", "Š": "S", "Ų": "U", "Ū": "U"
        }
        ,
        lv: {
            "ā": "a", "č": "c", "ē": "e", "ģ": "g", "ī": "i", "ķ": "k", "ļ": "l", "ņ": "n", "š": "s", "ū": "u", "ž": "z", "Ā": "A", "Č": "C", "Ē": "E", "Ģ": "G", "Ī": "i", "Ķ": "k", "Ļ": "L", "Ņ": "N", "Š": "S", "Ū": "u", "Ž": "Z"
        }
        ,
        pl: {
            "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n", "ó": "o", "ś": "s", "ź": "z", "ż": "z", "Ą": "A", "Ć": "C", "Ę": "e", "Ł": "L", "Ń": "N", "Ó": "O", "Ś": "S", "Ź": "Z", "Ż": "Z"
        }
        ,
        sk: {
            "ä": "a", "Ä": "A"
        }
        ,
        sr: {
            "љ": "lj", "њ": "nj", "Љ": "Lj", "Њ": "Nj", "đ": "dj", "Đ": "Dj"
        }
        ,
        tr: {
            "Ü": "U", "Ö": "O", "ü": "u", "ö": "o"
        }
    }
    ,
    o= {
        ar: {
            "∆": "delta", "∞": "la-nihaya", "♥": "hob", "&": "wa", "|": "aw", "<": "aqal-men", ">": "akbar-men", "∑": "majmou", "¤": "omla"
        }
        ,
        az: {}
        ,
        ca: {
            "∆": "delta", "∞": "infinit", "♥": "amor", "&": "i", "|": "o", "<": "menys que", ">": "mes que", "∑": "suma dels", "¤": "moneda"
        }
        ,
        cs: {
            "∆": "delta", "∞": "nekonecno", "♥": "laska", "&": "a", "|": "nebo", "<": "mensi nez", ">": "vetsi nez", "∑": "soucet", "¤": "mena"
        }
        ,
        de: {
            "∆": "delta", "∞": "unendlich", "♥": "Liebe", "&": "und", "|": "oder", "<": "kleiner als", ">": "groesser als", "∑": "Summe von", "¤": "Waehrung"
        }
        ,
        dv: {
            "∆": "delta", "∞": "kolunulaa", "♥": "loabi", "&": "aai", "|": "noonee", "<": "ah vure kuda", ">": "ah vure bodu", "∑": "jumula", "¤": "faisaa"
        }
        ,
        en: {
            "∆": "delta", "∞": "infinity", "♥": "love", "&": "and", "|": "or", "<": "less than", ">": "greater than", "∑": "sum", "¤": "currency"
        }
        ,
        es: {
            "∆": "delta", "∞": "infinito", "♥": "amor", "&": "y", "|": "u", "<": "menos que", ">": "mas que", "∑": "suma de los", "¤": "moneda"
        }
        ,
        fa: {
            "∆": "delta", "∞": "bi-nahayat", "♥": "eshgh", "&": "va", "|": "ya", "<": "kamtar-az", ">": "bishtar-az", "∑": "majmooe", "¤": "vahed"
        }
        ,
        fi: {
            "∆": "delta", "∞": "aarettomyys", "♥": "rakkaus", "&": "ja", "|": "tai", "<": "pienempi kuin", ">": "suurempi kuin", "∑": "summa", "¤": "valuutta"
        }
        ,
        fr: {
            "∆": "delta", "∞": "infiniment", "♥": "Amour", "&": "et", "|": "ou", "<": "moins que", ">": "superieure a", "∑": "somme des", "¤": "monnaie"
        }
        ,
        ge: {
            "∆": "delta", "∞": "usasruloba", "♥": "siqvaruli", "&": "da", "|": "an", "<": "naklebi", ">": "meti", "∑": "jami", "¤": "valuta"
        }
        ,
        gr: {}
        ,
        hu: {
            "∆": "delta", "∞": "vegtelen", "♥": "szerelem", "&": "es", "|": "vagy", "<": "kisebb mint", ">": "nagyobb mint", "∑": "szumma", "¤": "penznem"
        }
        ,
        it: {
            "∆": "delta", "∞": "infinito", "♥": "amore", "&": "e", "|": "o", "<": "minore di", ">": "maggiore di", "∑": "somma", "¤": "moneta"
        }
        ,
        lt: {
            "∆": "delta", "∞": "begalybe", "♥": "meile", "&": "ir", "|": "ar", "<": "maziau nei", ">": "daugiau nei", "∑": "suma", "¤": "valiuta"
        }
        ,
        lv: {
            "∆": "delta", "∞": "bezgaliba", "♥": "milestiba", "&": "un", "|": "vai", "<": "mazak neka", ">": "lielaks neka", "∑": "summa", "¤": "valuta"
        }
        ,
        my: {
            "∆": "kwahkhyaet", "∞": "asaonasme", "♥": "akhyait", "&": "nhin", "|": "tho", "<": "ngethaw", ">": "kyithaw", "∑": "paungld", "¤": "ngwekye"
        }
        ,
        mk: {}
        ,
        nl: {
            "∆": "delta", "∞": "oneindig", "♥": "liefde", "&": "en", "|": "of", "<": "kleiner dan", ">": "groter dan", "∑": "som", "¤": "valuta"
        }
        ,
        pl: {
            "∆": "delta", "∞": "nieskonczonosc", "♥": "milosc", "&": "i", "|": "lub", "<": "mniejsze niz", ">": "wieksze niz", "∑": "suma", "¤": "waluta"
        }
        ,
        pt: {
            "∆": "delta", "∞": "infinito", "♥": "amor", "&": "e", "|": "ou", "<": "menor que", ">": "maior que", "∑": "soma", "¤": "moeda"
        }
        ,
        ro: {
            "∆": "delta", "∞": "infinit", "♥": "dragoste", "&": "si", "|": "sau", "<": "mai mic ca", ">": "mai mare ca", "∑": "suma", "¤": "valuta"
        }
        ,
        ru: {
            "∆": "delta", "∞": "beskonechno", "♥": "lubov", "&": "i", "|": "ili", "<": "menshe", ">": "bolshe", "∑": "summa", "¤": "valjuta"
        }
        ,
        sk: {
            "∆": "delta", "∞": "nekonecno", "♥": "laska", "&": "a", "|": "alebo", "<": "menej ako", ">": "viac ako", "∑": "sucet", "¤": "mena"
        }
        ,
        sr: {}
        ,
        tr: {
            "∆": "delta", "∞": "sonsuzluk", "♥": "ask", "&": "ve", "|": "veya", "<": "kucuktur", ">": "buyuktur", "∑": "toplam", "¤": "para birimi"
        }
        ,
        uk: {
            "∆": "delta", "∞": "bezkinechnist", "♥": "lubov", "&": "i", "|": "abo", "<": "menshe", ">": "bilshe", "∑": "suma", "¤": "valjuta"
        }
        ,
        vn: {
            "∆": "delta", "∞": "vo cuc", "♥": "yeu", "&": "va", "|": "hoac", "<": "nho hon", ">": "lon hon", "∑": "tong", "¤": "tien te"
        }
    }
    ,
    u=[";",
    "?",
    ":",
    "@",
    "&",
    "=",
    "+",
    "$",
    ",",
    "/"].join(""),
    s=[";",
    "?",
    ":",
    "@",
    "&",
    "=",
    "+",
    "$",
    ","].join(""),
    l=[".",
    "!",
    "~",
    "*",
    "'",
    "(",
    ")"].join(""),
    r=function(a, r) {
        var m,
        d,
        g,
        k,
        y,
        f,
        p,
        z,
        b,
        A,
        v,
        E,
        j,
        O,
        S="-",
        w="",
        U="",
        C=!0,
        N= {}
        ,
        R="";
        if("string"!=typeof a)return"";
        if("string"==typeof r&&(S=r), p=o.en, z=i.en, "object"==typeof r) {
            m=r.maintainCase||!1,
            N=r.custom&&"object"==typeof r.custom?r.custom:N,
            g=+r.truncate>1&&r.truncate||!1,
            k=r.uric||!1,
            y=r.uricNoSlash||!1,
            f=r.mark||!1,
            C=r.symbols!==!1&&r.lang!==!1,
            S=r.separator||S,
            k&&(R+=u),
            y&&(R+=s),
            f&&(R+=l),
            p=r.lang&&o[r.lang]&&C?o[r.lang]:C?o.en: {}
            ,
            z=r.lang&&i[r.lang]?i[r.lang]:r.lang===!1||r.lang===!0? {}
            :i.en,
            r.titleCase&&"number"==typeof r.titleCase.length&&Array.prototype.toString.call(r.titleCase)?(r.titleCase.forEach(function(a) {
                N[a+""]=a+""
            }
            ), d=!0):d=!!r.titleCase,
            r.custom&&"number"==typeof r.custom.length&&Array.prototype.toString.call(r.custom)&&r.custom.forEach(function(a) {
                N[a+""]=a+""
            }
            ),
            Object.keys(N).forEach(function(e) {
                var n;
                n=e.length>1?new RegExp("\\b"+h(e)+"\\b", "gi"): new RegExp(h(e), "gi"), a=a.replace(n, N[e])
            }
            );
            for(v in N)R+=v
        }
        for(R+=S, R=h(R), a=a.replace(/(^\s+|\s+$)/g, ""), j=!1, O=!1, A=0, E=a.length;
        A<E;
        A++)v=a[A],
        c(v, N)?j=!1:z[v]?(v=j&&z[v].match(/[A-Za-z0-9]/)?" "+z[v]:z[v], j=!1):v in e?(A+1<E&&n.indexOf(a[A+1])>=0?(U+=v, v=""):O===!0?(v=t[U]+e[v], U=""):v=j&&e[v].match(/[A-Za-z0-9]/)?" "+e[v]:e[v], j=!1, O=!1):v in t?(U+=v, v="", A===E-1&&(v=t[U]), O=!0):!p[v]||k&&u.indexOf(v)!==-1||y&&s.indexOf(v)!==-1?(O===!0?(v=t[U]+v, U="", O=!1):j&&(/[A-Za-z0-9]/.test(v)||w.substr(-1).match(/A-Za-z0-9]/))&&(v=" "+v), j=!1):(v=j||w.substr(-1).match(/[A-Za-z0-9]/)?S+p[v]:p[v], v+=void 0!==a[A+1]&&a[A+1].match(/[A-Za-z0-9]/)?S:"", j=!0),
        w+=v.replace(new RegExp("[^\\w\\s"+R+"_-]", "g"), S);
        return d&&(w=w.replace(/(\w)(\S*)/g, function(a, e, n) {
            var t=e.toUpperCase()+(null!==n?n: "");
            return Object.keys(N).indexOf(t.toLowerCase())<0?t: t.toLowerCase()
        }
        )),
        w=w.replace(/\s+/g, S).replace(new RegExp("\\"+S+"+", "g"), S).replace(new RegExp("(^\\"+S+"+|\\"+S+"+$)", "g"), ""),
        g&&w.length>g&&(b=w.charAt(g)===S, w=w.slice(0, g), b||(w=w.slice(0, w.lastIndexOf(S)))),
        m||d||(w=w.toLowerCase()),
        w
    }
    ,
    m=function(a) {
        return function(e) {
            return r(e, a)
        }
    }
    ,
    h=function(a) {
        return a.replace(/[-\\^$*+?.()|[\] {}\/]/g, "\\$&")
    }
    ,
    c=function(a, e) {
        for(var n in e)if(e[n]===a)return!0
    }
    ;
    if("undefined"!=typeof module&&module.exports)module.exports=r,
    module.exports.createSlug=m;
    else if("undefined"!=typeof define&&define.amd)define([], function() {
        return r
    }
    );
    else try {
        if(a.getSlug||a.createSlug)throw"speakingurl: globals exists /(getSlug|createSlug)/";
        a.getSlug=r,
        a.createSlug=m
    }
    catch(a) {}
}

(this);