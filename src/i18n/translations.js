export const defaultLanguage = 'ka';

export const languageStorageKey = 'profitness-language';

export const languages = [
  { id: 'ka', label: 'ქართული', shortLabel: 'KA' },
  { id: 'en', label: 'English', shortLabel: 'EN' },
  { id: 'ru', label: 'Русский', shortLabel: 'RU' },
];

export const translations = {
  ka: {
    nav: {
      home: 'მთავარი',
      about: 'ჩვენს შესახებ',
      services: 'სერვისები',
      pricing: 'ფასები',
      contact: 'კონტაქტი',
    },
    common: {
      call: 'დარეკვა',
      viewMap: 'რუკაზე ნახვა',
      learnMore: 'გაიგე მეტი',
      seeServices: 'ნახე სერვისები',
      everyDay: 'ყოველდღე',
      accepted: 'მიიღება',
      reviews: 'მიმოხილვა',
      rating: 'შეფასება',
      socialNetworks: 'სოციალური ქსელები',
      contactInfo: 'საკონტაქტო ინფორმაცია',
      instagram: 'ინსტაგრამი',
      facebook: 'ფეისბუქი',
      facebookPage: 'ფეისბუქ გვერდი',
      map: 'რუკა',
      phone: 'ტელეფონი',
      email: 'ელ-ფოსტა',
      address: 'მისამართი',
      workingHours: 'სამუშაო საათები',
      links: 'ბმულები',
      preferredChannel: 'სასურველი არხი',
      closeTo: 'თან ახლოს',
      fitpass: 'FitPass',
    },
    aria: {
      homeLink: 'მთავარ გვერდზე გადასვლა',
      openNav: 'ნავიგაციის გახსნა',
      mainNav: 'მთავარი ნავიგაცია',
      mainVideo: 'მთავარი ვიდეო',
      quickInfo: 'მოკლე ინფორმაცია',
      highlights: 'ძირითადი უპირატესობები',
      languageSwitcher: 'ენის არჩევა',
      languageMenu: 'ენების სია',
    },
    header: {
      hours: 'საათები',
      hoursText: 'ყოველდღე {hours}',
      hoursFallback: 'დასაზუსტებელია',
    },
    business: {
      landmark: 'გუდვილ დიღომი',
      ratingSource: 'გუგლი',
      preferredContact: 'ტელეფონი',
    },
    home: {
      heroEyebrow: 'გუდვილ დიღომთან ახლოს',
      heroLead:
        'სუფთა, ფართო და მშვიდი დარბაზი პერსონალური ვარჯიშისთვის. დაიწყე თავდაჯერებულად, პროფესიონალ ინსტრუქტორთან და გარემოში, სადაც ზედმეტი ხმაური არ გაბრკოლებს.',
      videoTitle: 'Pro fitness Digomi ვიდეო',
      stats: {
        ratingLabel: 'გუგლი შეფასება',
        hoursLabel: 'ყოველდღე',
        fitpassLabel: 'მიიღება',
      },
      intro: {
        eyebrow: 'პირველი ნაბიჯი მარტივია',
        title: 'დარბაზი, სადაც დაწყება არ გართულდება',
        body:
          'Pro fitness Digomi შექმნილია მათთვის, ვისაც სურს მშვიდი რიტმით, სუფთა სივრცეში და პროფესიონალი მწვრთნელის გვერდით დაიწყოს ან გააგრძელოს ვარჯიში.',
      },
      reviews: {
        eyebrow: 'რას ამბობენ სტუმრები',
        title: 'მშვიდი, სუფთა და პროფესიონალური გარემო',
        body:
          'შეფასებებში ყველაზე ხშირად ჩანს სისუფთავე, კარგი სივრცე, მშვიდი მუსიკა და ინსტრუქტორების მეგობრული დამოკიდებულება.',
        note:
          'მცირე შენიშვნებში ზოგჯერ ახსენებენ გახსნის დაგვიანებას და მხრის ვარჯიშისთვის კონკრეტული ტრენაჟორების შეზღუდულ არჩევანს.',
      },
      quick: {
        eyebrow: 'სწრაფი გზები',
        title: 'აირჩიე შემდეგი ნაბიჯი',
        body: 'ნახე ძირითადი სერვისები, გადაამოწმე ფასები ტელეფონით ან პირდაპირ დაგეგმე ვიზიტი.',
      },
      contact: {
        eyebrow: 'დაგვიკავშირდი',
        title: 'პირველი ვარჯიში იწყება ზარით',
        body: 'ყველაზე სწრაფი გზა აქტუალური ინფორმაციის მისაღებად არის ტელეფონით დაკავშირება.',
      },
      previewLinks: [
        {
          to: '/services',
          title: 'სერვისები',
          text: 'დარბაზი, წონები, კარდიო ზონა, ტრენაჟორები და პერსონალური ვარჯიში.',
        },
        {
          to: '/pricing',
          title: 'ფასები',
          text: 'აქტუალური პირობები და FitPass-ის მიღება გადაამოწმეთ ტელეფონით.',
        },
        {
          to: '/contact',
          title: 'კონტაქტი',
          text: 'დარეკეთ, ნახეთ რუკა და დაგეგმეთ პირველი ვარჯიში გუდვილ დიღომთან.',
        },
      ],
    },
    about: {
      hero: {
        eyebrow: 'ჩვენს შესახებ',
        title: 'მშვიდი სივრცე ფოკუსირებული ვარჯიშისთვის',
        body:
          'Pro fitness Digomi მდებარეობს გუდვილ დიღომთან ახლოს და ორიენტირებულია სუფთა, ფართო და არაგადატვირთულ გარემოზე.',
      },
      sections: [
        {
          eyebrow: 'გარემო',
          title: 'სუფთა, ფართო და მშვიდი დარბაზი',
          paragraphs: [
            'დარბაზი კომფორტულია როგორც დამწყებისთვის, ისე მათთვის, ვინც უკვე რეგულარულად ვარჯიშობს. სივრცე მოწესრიგებულია, მშვიდია და არ არის გადატვირთული.',
            'აქ შეგიძლია ივარჯიშო კონცენტრირებულად, ზედმეტი ხმაურისა და დაძაბული ატმოსფეროს გარეშე. მდებარეობა გუდვილ დიღომთან ახლოს ყოველდღიურ ვიზიტსაც მარტივს ხდის.',
          ],
          imageAlt: 'დარბაზის საერთო სივრცე',
        },
        {
          eyebrow: 'დაწყება',
          title: 'დამწყებისთვის მეგობრული ატმოსფერო',
          paragraphs: [
            'პირველი ნაბიჯი ხშირად ყველაზე რთულია. Pro fitness Digomi-ში გარემო მარტივი, მშვიდი და მხარდამჭერია, რომ ვარჯიში თავდაჯერებულად დაიწყო.',
            'შეგიძლია მშვიდად გაეცნო ტრენაჟორებს, აირჩიო ტემპი და თანდათან გაზარდო დატვირთვა. მთავარი აქ სტაბილური პროგრესია, არა ზედმეტი წნეხი.',
          ],
          imageAlt: 'პერსონალური ვარჯიში',
        },
        {
          eyebrow: 'მწვრთნელები',
          title: 'პერსონალური ვარჯიში პროფესიონალთან ერთად',
          paragraphs: [
            'პერსონალური ვარჯიში ხელმისაწვდომია მათთვის, ვისაც სურს სწორი ტექნიკა, სტაბილური პროგრამა და პროფესიონალური მხარდაჭერა.',
            'მწვრთნელები და ინსტრუქტორები მისაწვდომ და პროფესიონალურ შთაბეჭდილებას ტოვებენ, რაც პირველ ვიზიტს უფრო მარტივს ხდის.',
          ],
          imageAltPrimary: 'პერსონალური ვარჯიში',
          imageAltSecondary: 'თავისუფალი წონები',
        },
      ],
    },
    services: {
      hero: {
        eyebrow: 'სერვისები',
        title: 'ყველაფერი მთავარი ვარჯიშისთვის',
        body:
          'დადასტურებული სერვისები მარტივად და მკაფიოდ: დარბაზი, ინვენტარი, ტრენაჟორები, კარდიო ზონა, პერსონალური ვარჯიში და გასახდელი სივრცე.',
      },
      items: [
        {
          title: 'დარბაზით სარგებლობა',
          description: 'სუფთა და მოწესრიგებული სივრცე ყოველდღიური ვარჯიშისთვის.',
        },
        {
          title: 'თავისუფალი წონები',
          description: 'ძალოვანი პროგრესისთვის საჭირო ძირითადი ინვენტარი.',
        },
        {
          title: 'კარდიო ზონა',
          description: 'რიტმული, მარტივად დასაწყები კარდიო ვარჯიშები.',
        },
        {
          title: 'სავარჯიშო ტრენაჟორები',
          description: 'კუნთის კონტროლირებულად და უსაფრთხოდ დატვირთვისთვის.',
        },
        {
          title: 'პერსონალური ვარჯიში',
          description: 'მწვრთნელთან ერთად შედგენილი გზა დამწყებისთვისაც და გამოცდილისთვისაც.',
        },
        {
          title: 'გასახდელი სივრცე',
          description: 'მოსახერხებელი სივრცე ვარჯიშამდე და ვარჯიშის შემდეგ.',
        },
      ],
      highlights: ['პერსონალური ვარჯიში', 'თანამედროვე ინვენტარი', 'მშვიდი გარემო', 'ღიაა ყოველდღე'],
      reviewThemes: [
        {
          title: 'სისუფთავე',
          description: 'სტუმრები ხშირად აღნიშნავენ მოწესრიგებულ და სუფთა სივრცეს.',
        },
        {
          title: 'არ არის გადატვირთული',
          description: 'ვარჯიში უფრო მშვიდია, როცა დარბაზი ზედმეტად ხალხმრავალი არ არის.',
        },
        {
          title: 'ფართო და მშვიდი გარემო',
          description: 'სივრცე კომფორტულია კონცენტრირებული ვარჯიშისთვის.',
        },
        {
          title: 'კარგი გუნდი',
          description: 'პერსონალი და ინსტრუქტორები მეგობრულად და პროფესიონალურად ფასდებიან.',
        },
        {
          title: 'დაბალი მუსიკა',
          description: 'მუსიკა არ ფარავს ვარჯიშის რიტმს და გარემო მშვიდად რჩება.',
        },
        {
          title: 'კარგი ინვენტარი',
          description: 'სივრცე და აღჭურვილობა ხელს უწყობს სტაბილურ პროგრესს.',
        },
      ],
    },
    pricing: {
      hero: {
        eyebrow: 'ფასები',
        title: 'თვიური აბონიმენტები და FitPass',
      },
      packages: [
        {
          title: 'დილის პაკეტი',
          price: '70 ₾',
          note: 'თვიური აბონიმენტი',
          features: ['ულიმიტო ვიზიტები', '08:00-15:00'],
        },
        {
          title: 'სრული პაკეტი',
          price: '90 ₾',
          note: 'თვიური აბონიმენტი',
          features: ['ულიმიტო ვიზიტები', 'სრული დღის წვდომა'],
        },
        {
          title: 'სტუდენტური და ოჯახური პაკეტი',
          price: '70 ₾',
          note: 'პრომო ფასი',
          features: ['ულიმიტო ვიზიტები', 'სტუდენტებისთვის და ოჯახებისთვის', 'ნაცვლად 90 ₾'],
        },
      ],
      fitpass: {
        logoAria: 'FitPass ლოგოს ადგილი',
        logoAlt: 'FitPass ლოგო',
        eyebrow: 'ხელმისაწვდომი ვარჯიში',
        title: 'დარბაზი იღებს FitPass-ს',
        body: 'Pro fitness Digomi ხელმისაწვდომია FitPass-ის მომხმარებლებისთვისაც.',
        link: 'FitPass-ზე გადასვლა',
      },
    },
    contact: {
      hero: {
        eyebrow: 'კონტაქტი',
        title: 'მოდი გუდვილ დიღომთან ახლოს',
        body: 'დაგვირეკე, გადაამოწმე დეტალები და დაგეგმე პირველი ან შემდეგი ვარჯიში მშვიდ გარემოში.',
      },
      addressLine: 'გუდვილ დიღომთან ახლოს',
      hoursLine: 'ყოველდღე: 07:30 - 00:00',
      mapTitle: 'Pro fitness Digomi რუკა',
    },
    contactCards: {
      phoneTitle: 'დარეკვა',
      addressTitle: 'გუდვილ დიღომი',
      socialTitle: 'სიახლეები',
    },
    footer: {
      hoursLine: 'ყოველდღე, 07:30-00:00',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About us',
      services: 'Services',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    common: {
      call: 'Call',
      viewMap: 'View on map',
      learnMore: 'Learn more',
      seeServices: 'See services',
      everyDay: 'Every day',
      accepted: 'Accepted',
      reviews: 'Reviews',
      rating: 'Rating',
      socialNetworks: 'Social networks',
      contactInfo: 'Contact information',
      instagram: 'Instagram',
      facebook: 'Facebook',
      facebookPage: 'Facebook page',
      map: 'Map',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      workingHours: 'Working hours',
      links: 'Links',
      preferredChannel: 'Preferred channel',
      closeTo: 'nearby',
      fitpass: 'FitPass',
    },
    aria: {
      homeLink: 'Go to the home page',
      openNav: 'Open navigation',
      mainNav: 'Main navigation',
      mainVideo: 'Main video',
      quickInfo: 'Quick information',
      highlights: 'Key advantages',
      languageSwitcher: 'Choose language',
      languageMenu: 'Language list',
    },
    header: {
      hours: 'Hours',
      hoursText: 'Every day {hours}',
      hoursFallback: 'To be confirmed',
    },
    business: {
      landmark: 'Goodwill Dighomi',
      ratingSource: 'Google',
      preferredContact: 'Phone',
    },
    home: {
      heroEyebrow: 'Near Goodwill Dighomi',
      heroLead:
        'A clean, spacious, and calm gym for personal training. Start confidently with a professional instructor in an environment where extra noise will not distract you.',
      videoTitle: 'Pro fitness Digomi video',
      stats: {
        ratingLabel: 'Google rating',
        hoursLabel: 'Every day',
        fitpassLabel: 'Accepted',
      },
      intro: {
        eyebrow: 'The first step is simple',
        title: 'A gym where getting started is not complicated',
        body:
          'Pro fitness Digomi is made for people who want to start or continue training at a calm pace, in a clean space, and with a professional trainer nearby.',
      },
      reviews: {
        eyebrow: 'What visitors say',
        title: 'Calm, clean, and professional environment',
        body:
          'Reviews most often point to cleanliness, good space, calm music, and a friendly attitude from the instructors.',
        note:
          'Minor notes sometimes mention delayed opening and limited choice of specific machines for shoulder training.',
      },
      quick: {
        eyebrow: 'Quick paths',
        title: 'Choose the next step',
        body: 'See the main services, check prices by phone, or plan your visit directly.',
      },
      contact: {
        eyebrow: 'Contact us',
        title: 'The first workout starts with a call',
        body: 'The fastest way to get up-to-date information is to contact the gym by phone.',
      },
      previewLinks: [
        {
          to: '/services',
          title: 'Services',
          text: 'Gym access, weights, cardio zone, machines, and personal training.',
        },
        {
          to: '/pricing',
          title: 'Pricing',
          text: 'Check current conditions and FitPass acceptance by phone.',
        },
        {
          to: '/contact',
          title: 'Contact',
          text: 'Call, view the map, and plan your first workout near Goodwill Dighomi.',
        },
      ],
    },
    about: {
      hero: {
        eyebrow: 'About us',
        title: 'A calm space for focused training',
        body:
          'Pro fitness Digomi is located near Goodwill Dighomi and focuses on a clean, spacious, and uncrowded environment.',
      },
      sections: [
        {
          eyebrow: 'Environment',
          title: 'Clean, spacious, and calm gym',
          paragraphs: [
            'The gym is comfortable both for beginners and for people who already train regularly. The space is organized, calm, and not overcrowded.',
            'You can train with focus here, without extra noise or a tense atmosphere. The location near Goodwill Dighomi also makes everyday visits easier.',
          ],
          imageAlt: 'Main gym area',
        },
        {
          eyebrow: 'Getting started',
          title: 'Beginner-friendly atmosphere',
          paragraphs: [
            'The first step is often the hardest. At Pro fitness Digomi, the environment is simple, calm, and supportive so you can start training confidently.',
            'You can calmly get familiar with the machines, choose your pace, and gradually increase the load. The focus here is steady progress, not extra pressure.',
          ],
          imageAlt: 'Personal training',
        },
        {
          eyebrow: 'Trainers',
          title: 'Personal training with a professional',
          paragraphs: [
            'Personal training is available for those who want correct technique, a stable program, and professional support.',
            'Trainers and instructors leave an approachable and professional impression, which makes the first visit easier.',
          ],
          imageAltPrimary: 'Personal training',
          imageAltSecondary: 'Free weights',
        },
      ],
    },
    services: {
      hero: {
        eyebrow: 'Services',
        title: 'Everything essential for training',
        body:
          'Confirmed services, simply and clearly: gym access, equipment, machines, cardio zone, personal training, and changing area.',
      },
      items: [
        {
          title: 'Gym access',
          description: 'A clean and organized space for everyday training.',
        },
        {
          title: 'Free weights',
          description: 'Essential equipment for strength progress.',
        },
        {
          title: 'Cardio zone',
          description: 'Rhythmic, easy-to-start cardio workouts.',
        },
        {
          title: 'Training machines',
          description: 'For controlled and safe muscle loading.',
        },
        {
          title: 'Personal training',
          description: 'A path built with a trainer for beginners and experienced visitors alike.',
        },
        {
          title: 'Changing area',
          description: 'A convenient space before and after training.',
        },
      ],
      highlights: ['Personal training', 'Modern equipment', 'Calm environment', 'Open every day'],
      reviewThemes: [
        {
          title: 'Cleanliness',
          description: 'Visitors often mention an organized and clean space.',
        },
        {
          title: 'Not overcrowded',
          description: 'Training is calmer when the gym is not too crowded.',
        },
        {
          title: 'Spacious and calm environment',
          description: 'The space is comfortable for focused training.',
        },
        {
          title: 'Good team',
          description: 'Staff and instructors are described as friendly and professional.',
        },
        {
          title: 'Low music',
          description: 'Music does not overpower the workout rhythm and the atmosphere stays calm.',
        },
        {
          title: 'Good equipment',
          description: 'The space and equipment support steady progress.',
        },
      ],
    },
    pricing: {
      hero: {
        eyebrow: 'Pricing',
        title: 'Monthly memberships and FitPass',
      },
      packages: [
        {
          title: 'Morning package',
          price: '70 ₾',
          note: 'Monthly membership',
          features: ['Unlimited visits', '08:00-15:00'],
        },
        {
          title: 'Full package',
          price: '90 ₾',
          note: 'Monthly membership',
          features: ['Unlimited visits', 'Full-day access'],
        },
        {
          title: 'Student and family package',
          price: '70 ₾',
          note: 'Promo price',
          features: ['Unlimited visits', 'For students and families', 'Instead of 90 ₾'],
        },
      ],
      fitpass: {
        logoAria: 'FitPass logo area',
        logoAlt: 'FitPass logo',
        eyebrow: 'Accessible training',
        title: 'The gym accepts FitPass',
        body: 'Pro fitness Digomi is also available for FitPass users.',
        link: 'Go to FitPass',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'Come near Goodwill Dighomi',
        body: 'Call us, check the details, and plan your first or next workout in a calm environment.',
      },
      addressLine: 'Near Goodwill Dighomi',
      hoursLine: 'Every day: 07:30 - 00:00',
      mapTitle: 'Pro fitness Digomi map',
    },
    contactCards: {
      phoneTitle: 'Call',
      addressTitle: 'Goodwill Dighomi',
      socialTitle: 'Updates',
    },
    footer: {
      hoursLine: 'Every day, 07:30-00:00',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      services: 'Услуги',
      pricing: 'Цены',
      contact: 'Контакты',
    },
    common: {
      call: 'Позвонить',
      viewMap: 'Посмотреть на карте',
      learnMore: 'Узнать больше',
      seeServices: 'Посмотреть услуги',
      everyDay: 'Каждый день',
      accepted: 'Принимается',
      reviews: 'Отзывы',
      rating: 'Рейтинг',
      socialNetworks: 'Социальные сети',
      contactInfo: 'Контактная информация',
      instagram: 'Инстаграм',
      facebook: 'Фейсбук',
      facebookPage: 'Страница Facebook',
      map: 'Карта',
      phone: 'Телефон',
      email: 'Эл. почта',
      address: 'Адрес',
      workingHours: 'Рабочие часы',
      links: 'Ссылки',
      preferredChannel: 'Предпочтительный канал',
      closeTo: 'рядом',
      fitpass: 'FitPass',
    },
    aria: {
      homeLink: 'Перейти на главную страницу',
      openNav: 'Открыть навигацию',
      mainNav: 'Основная навигация',
      mainVideo: 'Главное видео',
      quickInfo: 'Краткая информация',
      highlights: 'Основные преимущества',
      languageSwitcher: 'Выбрать язык',
      languageMenu: 'Список языков',
    },
    header: {
      hours: 'Часы',
      hoursText: 'Каждый день {hours}',
      hoursFallback: 'Уточняется',
    },
    business: {
      landmark: 'Goodwill Dighomi',
      ratingSource: 'Google',
      preferredContact: 'Телефон',
    },
    home: {
      heroEyebrow: 'Рядом с Goodwill Dighomi',
      heroLead:
        'Чистый, просторный и спокойный зал для персональных тренировок. Начните уверенно с профессиональным инструктором в обстановке, где лишний шум не мешает.',
      videoTitle: 'Видео Pro fitness Digomi',
      stats: {
        ratingLabel: 'Рейтинг Google',
        hoursLabel: 'Каждый день',
        fitpassLabel: 'Принимается',
      },
      intro: {
        eyebrow: 'Первый шаг простой',
        title: 'Зал, где начать несложно',
        body:
          'Pro fitness Digomi создан для тех, кто хочет начать или продолжить тренировки в спокойном ритме, в чистом пространстве и рядом с профессиональным тренером.',
      },
      reviews: {
        eyebrow: 'Что говорят посетители',
        title: 'Спокойная, чистая и профессиональная среда',
        body:
          'В отзывах чаще всего отмечают чистоту, хорошее пространство, спокойную музыку и дружелюбное отношение инструкторов.',
        note:
          'В небольших замечаниях иногда упоминают задержку открытия и ограниченный выбор отдельных тренажеров для тренировки плеч.',
      },
      quick: {
        eyebrow: 'Быстрые переходы',
        title: 'Выберите следующий шаг',
        body: 'Посмотрите основные услуги, уточните цены по телефону или сразу запланируйте визит.',
      },
      contact: {
        eyebrow: 'Свяжитесь с нами',
        title: 'Первая тренировка начинается со звонка',
        body: 'Самый быстрый способ получить актуальную информацию - связаться с залом по телефону.',
      },
      previewLinks: [
        {
          to: '/services',
          title: 'Услуги',
          text: 'Доступ в зал, веса, кардиозона, тренажеры и персональные тренировки.',
        },
        {
          to: '/pricing',
          title: 'Цены',
          text: 'Актуальные условия и прием FitPass уточняйте по телефону.',
        },
        {
          to: '/contact',
          title: 'Контакты',
          text: 'Позвоните, посмотрите карту и запланируйте первую тренировку рядом с Goodwill Dighomi.',
        },
      ],
    },
    about: {
      hero: {
        eyebrow: 'О нас',
        title: 'Спокойное пространство для сфокусированной тренировки',
        body:
          'Pro fitness Digomi находится рядом с Goodwill Dighomi и ориентирован на чистую, просторную и не перегруженную среду.',
      },
      sections: [
        {
          eyebrow: 'Среда',
          title: 'Чистый, просторный и спокойный зал',
          paragraphs: [
            'Зал удобен как для начинающих, так и для тех, кто уже тренируется регулярно. Пространство организованное, спокойное и не перегруженное.',
            'Здесь можно тренироваться сосредоточенно, без лишнего шума и напряженной атмосферы. Расположение рядом с Goodwill Dighomi также упрощает ежедневные визиты.',
          ],
          imageAlt: 'Основное пространство зала',
        },
        {
          eyebrow: 'Начало',
          title: 'Атмосфера, дружелюбная к новичкам',
          paragraphs: [
            'Первый шаг часто самый сложный. В Pro fitness Digomi среда простая, спокойная и поддерживающая, чтобы вы могли начать уверенно.',
            'Можно спокойно познакомиться с тренажерами, выбрать темп и постепенно увеличивать нагрузку. Главное здесь - стабильный прогресс, а не лишнее давление.',
          ],
          imageAlt: 'Персональная тренировка',
        },
        {
          eyebrow: 'Тренеры',
          title: 'Персональная тренировка с профессионалом',
          paragraphs: [
            'Персональные тренировки доступны тем, кто хочет правильную технику, стабильную программу и профессиональную поддержку.',
            'Тренеры и инструкторы производят доступное и профессиональное впечатление, что делает первый визит проще.',
          ],
          imageAltPrimary: 'Персональная тренировка',
          imageAltSecondary: 'Свободные веса',
        },
      ],
    },
    services: {
      hero: {
        eyebrow: 'Услуги',
        title: 'Все основное для тренировки',
        body:
          'Подтвержденные услуги просто и понятно: зал, инвентарь, тренажеры, кардиозона, персональные тренировки и раздевалка.',
      },
      items: [
        {
          title: 'Пользование залом',
          description: 'Чистое и организованное пространство для ежедневных тренировок.',
        },
        {
          title: 'Свободные веса',
          description: 'Основной инвентарь для силового прогресса.',
        },
        {
          title: 'Кардиозона',
          description: 'Ритмичные кардиотренировки, с которых легко начать.',
        },
        {
          title: 'Тренажеры',
          description: 'Для контролируемой и безопасной нагрузки мышц.',
        },
        {
          title: 'Персональная тренировка',
          description: 'Путь, составленный с тренером, для новичков и опытных посетителей.',
        },
        {
          title: 'Раздевалка',
          description: 'Удобное пространство до и после тренировки.',
        },
      ],
      highlights: ['Персональная тренировка', 'Современный инвентарь', 'Спокойная среда', 'Открыто каждый день'],
      reviewThemes: [
        {
          title: 'Чистота',
          description: 'Посетители часто отмечают организованное и чистое пространство.',
        },
        {
          title: 'Не перегружен',
          description: 'Тренироваться спокойнее, когда в зале не слишком много людей.',
        },
        {
          title: 'Просторная и спокойная среда',
          description: 'Пространство комфортно для сосредоточенной тренировки.',
        },
        {
          title: 'Хорошая команда',
          description: 'Персонал и инструкторы оцениваются как дружелюбные и профессиональные.',
        },
        {
          title: 'Тихая музыка',
          description: 'Музыка не перекрывает ритм тренировки, и атмосфера остается спокойной.',
        },
        {
          title: 'Хороший инвентарь',
          description: 'Пространство и оборудование помогают стабильному прогрессу.',
        },
      ],
    },
    pricing: {
      hero: {
        eyebrow: 'Цены',
        title: 'Месячные абонементы и FitPass',
      },
      packages: [
        {
          title: 'Утренний пакет',
          price: '70 ₾',
          note: 'Месячный абонемент',
          features: ['Безлимитные визиты', '08:00-15:00'],
        },
        {
          title: 'Полный пакет',
          price: '90 ₾',
          note: 'Месячный абонемент',
          features: ['Безлимитные визиты', 'Доступ на полный день'],
        },
        {
          title: 'Студенческий и семейный пакет',
          price: '70 ₾',
          note: 'Промо цена',
          features: ['Безлимитные визиты', 'Для студентов и семей', 'Вместо 90 ₾'],
        },
      ],
      fitpass: {
        logoAria: 'Место для логотипа FitPass',
        logoAlt: 'Логотип FitPass',
        eyebrow: 'Доступная тренировка',
        title: 'Зал принимает FitPass',
        body: 'Pro fitness Digomi также доступен для пользователей FitPass.',
        link: 'Перейти на FitPass',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Контакты',
        title: 'Приходите рядом с Goodwill Dighomi',
        body: 'Позвоните нам, уточните детали и запланируйте первую или следующую тренировку в спокойной среде.',
      },
      addressLine: 'Рядом с Goodwill Dighomi',
      hoursLine: 'Каждый день: 07:30 - 00:00',
      mapTitle: 'Карта Pro fitness Digomi',
    },
    contactCards: {
      phoneTitle: 'Позвонить',
      addressTitle: 'Goodwill Dighomi',
      socialTitle: 'Новости',
    },
    footer: {
      hoursLine: 'Каждый день, 07:30-00:00',
    },
  },
};
