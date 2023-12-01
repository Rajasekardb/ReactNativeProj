import {generateId} from '../../utils/utils';
import {CATEGORIES_DATA} from './categoriesData';

const PRODUCT_ARRAY_DATA = [
  {
    title: 'Samsung Galaxy S23',
    desc: 'Samsung Galaxy S23 - это новый флагманский смартфон от Samsung, который был представлен в январе 2023 года. Он имеет множество преимуществ, таких как: Дисплей: 6.1 дюйма Dynamic AMOLED с разрешением 1080 x 2340 пикселей и частотой обновления 120 Гц1. Дисплей защищен стеклом Corning® Gorilla® Glass Victus® 2, которое является самым прочным стеклом для смартфонов2. Камера: тройная основная камера с 50-мегапиксельным широкоугольным объективом, 10-мегапиксельным телеобъективом с трехкратным оптическим зумом и 12-мегапиксельным сверхширокоугольным объективом2. Камера поддерживает ночной режим, который позволяет делать четкие и яркие снимки даже в темноте2. Фронтальная камера имеет разрешение 12 мегапикселей и технологию Dual Pixel для быстрого и точного фокусирования2. Процессор: Qualcomm Snapdragon 8 Gen 2 for Galaxy, который является первым в мире 4-нм процессором для смартфонов2. Он обеспечивает высокую производительность, энергоэффективность и поддержку 5G-сетей1. Батарея: 3900 мАч с поддержкой быстрой зарядки 25 Вт, беспроводной зарядки 15 Вт и обратной беспроводной зарядки 4.5 Вт1. Батарея способна работать весь день без подзарядки2. Дизайн: тонкий и легкий корпус из переработанного стекла и алюминия с классом защиты IP68 от пыли и воды2. Смартфон доступен в трех цветах: лаванда, бежевый и черный фантом2. Samsung Galaxy S23 - это смартфон, который сочетает в себе красоту, мощь и инновации. Он идеально подходит для тех, кто любит фотографировать, играть, смотреть видео и многое другое. Вы можете узнать больше о нем на официальном сайте Samsung3 или посмотреть обзоры и отзывы на других сайтах4.',
    price: 170_000,
    category: CATEGORIES_DATA.category1.type,
    imgCover:
      'https://images.samsung.com/ru/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-share-image.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://s0.rbk.ru/v6_top_pics/media/img/1/97/756752819662971.webp',
      },
      {
        id: generateId(),
        src: 'https://www.ixbt.com/img/n1/news/2022/8/3/GALAXY-S23-ULTRA-5K2-scaled_large.jpg',
      },
      {
        id: generateId(),
        src: 'https://media.wired.com/photos/6408fd72fedb0acc6b3c3662/master/pass/Samsung-S23-Deals-Gear.jpg',
      },
    ],
  },

  {
    title: 'Asus zenfone 10',
    desc: 'Asus Zenfone 10 - это смартфон, который оснащен 5.92-дюймовым Super AMOLED дисплеем с разрешением 1080 x 2400 пикселей1. Он работает на процессоре Qualcomm Snapdragon 8 Gen 2 и имеет две камеры - 50 МП и 13 МП1. Батарея имеет емкость 4300 мАч1. Смартфон работает на операционной системе Android 131. Весит он 172 грамма1. Несмотря на то, что Asus Zenfone 10 имеет небольшие размеры и маленький вес, он обладает топовой начинкой, которая позволяет играть поддерживаемые игры с частотой обновления 144 Гц1. Он также обладает впечатляющей автономностью и поддерживает беспроводную зарядку1. Однако, максимальная яркость дисплея не соответствует классу смартфона1. Производитель обещает всего два крупных обновления1. Сверхширокоугольная и передняя камеры лишены автофокуса1. Отсутствует телеобъектив1.',
    price: 80_000,
    category: CATEGORIES_DATA.category1.type,
    imgCover:
      'https://3dnews.ru/assets/external/illustrations/2023/08/27/1092124/sm.01.800.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://voronezh.hatiko.ru/wa-data/public/shop/products/44/38/3844/images/11030/11030.970.jpg',
      },
      {
        id: generateId(),
        src: 'https://3dnews.ru/assets/external/illustrations/2023/08/27/1092124/sm.05.800.jpg',
      },
    ],
  },

  {
    title: 'iPhone 12',
    desc: ' iPhone 12 - это смартфон, выпущенный компанией Apple в 2020 году. Он оснащен 6.1-дюймовым Super Retina XDR OLED дисплеем с разрешением 1170 x 2532 пикселей1. Смартфон работает на процессоре Apple A14 Bionic и имеет две камеры - 12 МП и 12 МП1. Батарея имеет емкость 2815 мАч1. Смартфон работает на операционной системе iOS 14.1, которая может быть обновлена до iOS 17.1.11. Весит он 164 грамма1. iPhone 12 доступен в нескольких цветах: черный, белый, красный, зеленый, синий и фиолетовый1. Он также обладает поддержкой 5G1. Кроме того, смартфон имеет защиту от воды и пыли по стандарту IP681. Стоимость iPhone 12 может варьироваться в зависимости от региона и продавца. На сайте Amazon DE, например, можно приобрести модель с 128 ГБ памяти за €435.001. На сайте Swappie Store можно купить iPhone 12 64 ГБ за €399.002.',
    price: 150_000,
    category: CATEGORIES_DATA.category1.type,
    imgCover: 'https://www.retail.ru/upload/medialibrary/1ed/Apple.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://i.insider.com/5fdcbfcbc910a400192e846c?width=700',
      },
      {
        id: generateId(),
        src: 'https://www.tradeinn.com/f/13782/137821848/apple-iphone-12-pro-max-6gb-128gb-6.7.jpg',
      },
    ],
  },

  {
    title: 'Pixel 7',
    desc: 'Google Pixel 7 - это смартфон, выпущенный Google в 2022 году. Он оснащен процессором Google Tensor G2 и работает на операционной системе Android 14. Смартфон имеет 6,3-дюймовый AMOLED-дисплей с разрешением 1080 x 2400 пикселей. Камера смартфона состоит из двух линз: 50 МП и 12 МП. Батарея смартфона имеет емкость 4355 мАч. Согласно тестам CHIP, Google Pixel 7 имеет высокую производительность, качественный дисплей и камеру, а также эффективную работу операционной системы Android 13 1. Стоимость Google Pixel 7 находится в диапазоне от €415.99 до €51999.00 2.',
    price: 100_000,
    category: CATEGORIES_DATA.category1.type,
    imgCover:
      'https://3dnews.ru/assets/external/illustrations/2022/05/12/1065741/pixel_new_01.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://3dnews.ru/assets/external/illustrations/2022/10/06/1075391/1282.jpg',
      },
      {
        id: generateId(),
        src: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/127/638/586/810/242/319/100044865127b0.jpg',
      },
      {
        id: generateId(),
        src: 'https://cdek.shopping/storage/obzor-novyx-google-pixel-7-i-google-pixel-7-pro.jpeg',
      },
      {
        id: generateId(),
        src: 'https://mobile-review.com/all/wp-content/uploads/2022/10/4-14.jpg',
      },
    ],
  },

  {
    title: 'Xiaomi 13',
    desc: 'Xiaomi 13 - это смартфон, выпущенный Xiaomi в 2022 году. Он оснащен процессором Qualcomm Snapdragon 8 Gen 2 и работает на операционной системе Android 13. Смартфон имеет 6,36-дюймовый AMOLED-дисплей с разрешением 1080 x 2400 пикселей. Камера смартфона состоит из трех линз: 50 МП, 10 МП и 12 МП. Батарея смартфона имеет емкость 4500 мАч. Согласно результатам тестов, Xiaomi 13 имеет высокую производительность, качественный дисплей и камеру 1. На сайте mediamarkt.de можно приобрести следующие модели Xiaomi 13: XIAOMI 13 256 GB Black за €879.00 2. XIAOMI 13T 256 GB Black Dual SIM за €614.99 2. XIAOMI 13 Lite 5G 128 GB Black Dual SIM за €449.00 2. Xiaomi 13 5G 256GB Black за €604.99 2. Xiaomi 13 Lite 5G Handy, 8GB + 256GB Android Smartphone mit 32MP Frontkamera und 50MP Rückkamera 6.55" FHD+AMOLED DotDisplay, NFC 4500mAh Battery + за €457.76 3. Xiaomi 13 Lite 256GB - Schwarz - Ohne Vertrag - Dual-SIM за €569.00 2. Xiaomi 13 5g Smartphone 6.36" Android 13 Snapdragon 8 Gen 2 Octa Core за €699.99 2.',
    price: 130_000,
    category: CATEGORIES_DATA.category1.type,
    imgCover: 'https://ee-mag.ru/media/user-uploads/2023/02/28/xiaomi_13_1.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://i02.appmifile.com/521_operator_sg/08/02/2023/503cb266cda5de2f7c761228f3182737.png',
      },
      {
        id: generateId(),
        src: 'https://storage.yandexcloud.net/mobiltelefon/december22/11/xiaomi_13_press_picture6_0.jpg',
      },
      {
        id: generateId(),
        src: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-13/m/img01.jpg',
      },
      {
        id: generateId(),
        src: 'https://3dnews.ru/assets/external/illustrations/2022/12/11/1078700/xiaomi13Pro_01.jpg',
      },
    ],
  },

  {
    title: 'Macbook pro',
    desc: 'MacBook Pro - это продвинутый ноутбук от Apple, который предлагает ряд впечатляющих функций1. Вот некоторые из них: Чипы: MacBook Pro оснащен самыми передовыми чипами, которые когда-либо создавались для персонального компьютера1. Батарея: Ноутбук обеспечивает до 22 часов работы от батареи, что делает его идеальным для профессиональной мобильности1. Дисплей: MacBook Pro имеет лучший в мире дисплей для ноутбуков1. Процессоры и память: В зависимости от модели, MacBook Pro может иметь до 16-ядерного процессора, до 40-ядерного графического процессора и до 128 ГБ объединенной памяти1. Цвет: MacBook Pro теперь доступен в новом цвете - Space Black1.',
    price: 300_000,
    category: CATEGORIES_DATA.category2.type,
    imgCover:
      'https://www.zdnet.com/a/img/2023/11/06/ff2ab50d-93b8-4954-96e5-7176557f03b5/dsc02399-enhanced-nr.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://best-magazin.com/image/cache/catalog/product/Apple%20MacBook/2023/apple-macbook-pro-16-m2-pro-512gb-space-gray-800x800.jpg',
      },
      {
        id: generateId(),
        src: 'https://applegod.ru/wp-content/uploads/2021/11/mbp14-spacegray-gallery1-202110_geo_ru-scaled-1.jpg',
      },
      {
        id: generateId(),
        src: 'https://www.notebookcheck-ru.com/fileadmin/_processed_/c/3/csm_AKA8518_984be0479c.jpg',
      },
      {
        id: generateId(),
        src: 'https://www.apple.com/v/macbook-pro-14-and-16/a/images/overview/hero/intro__ewz1ro7xs14y_large.jpg',
      },
      {
        id: generateId(),
        src: 'https://www.notebookcheck-ru.com/fileadmin/Notebooks/Apple/MacBook_Pro_16_2023_M2_Max/teaser.jpg',
      },
    ],
  },

  {
    title: 'ASUS ZenBook Duo',
    desc: 'ASUS ZenBook Duo - это инновационный ноутбук, который предлагает ряд уникальных функций123. Вот некоторые из них: Дополнительный экран ScreenPad Plus: ZenBook Duo оснащен дополнительным экраном ScreenPad Plus, который обеспечивает улучшенную эргономику и бесшовные рабочие процессы12. Процессор: ZenBook Duo 14 (UX482) включает в себя новейший процессор Intel Core 11-го поколения2. Дисплей: ZenBook Pro Duo 15 OLED обладает 4K OLED HDR-сенсорным экраном3.',
    price: 200_000,
    category: CATEGORIES_DATA.category2.type,
    imgCover:
      'https://3dnews.ru/assets/external/illustrations/2021/02/28/1033754/sm.00_logo.800.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://stereo-news.com/wp-content/uploads/2021/02/Asus-ZenBook-Duo-14-UX482E-obzor-ultrabuka-s-dvumya-ekranami.jpg',
      },
      {
        id: generateId(),
        src: 'https://ir.ozone.ru/s3/multimedia-u/c1000/6596818086.jpg',
      },
      {
        id: generateId(),
        src: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/IMG_20210106_095655.jpg',
      },
    ],
  },

  {
    title: 'ASUS ROG Strix',
    desc: 'ASUS ROG Strix - это серия игровых ноутбуков от ASUS, которые предлагают высокую производительность и качественные компоненты для геймеров. Вот некоторые модели, которые вы можете рассмотреть: ASUS ROG Strix G17 G713RC-HX032W: Игровой ноутбук с 17,3-дюймовым дисплеем, процессором AMD Ryzen™ 7, 16 ГБ оперативной памяти, 512 ГБ SSD, NVIDIA GeForce RTX™ 30501. Цена: €1099.001. ASUS ROG Strix G16 G614JV-N3192W: 16-дюймовый ноутбук с процессором Intel Core i7-13650HX, 16 ГБ оперативной памяти, 1 ТБ SSD, RTX 4060, Windows 111. Цена: €1699.00 (скидка 6%)1. ASUS ROG Strix G17 G713PV-LL047: 17,3-дюймовый ноутбук с процессором AMD Ryzen 9 7845HX, 16 ГБ оперативной памяти, 1 ТБ SSD, RTX 40601. Цена: €1549.00 (скидка 14%)1. ASUS ROG Strix SCAR 18: Игровой ноутбук с 18-дюймовым дисплеем QHD+, процессором Intel Core i9-13980HX, 32 ГБ оперативной памяти, 1 ТБ SSD, NVIDIA RTX 40801. Цена: €3699.001. Эти ноутбуки предлагают мощные процессоры, большой объем оперативной памяти и SSD, а также высококачественные графические карты NVIDIA для обеспечения отличной игровой производительности. Они также оснащены высококачественными дисплеями с высоким разрешением и частотой обновления для обеспечения плавного и реалистичного геймплея',
    price: 400_000,
    category: CATEGORIES_DATA.category2.type,
    imgCover:
      'https://3dnews.ru/assets/external/illustrations/2020/09/17/1020866/sm.00_logo.800.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://mr-robot.ru/upload/iblock/c21/c212f69d73608ce98368d6a07b4fc362/c18812d1fe955d5f7c9a5b294fd7cbfc.jpg',
      },
      {
        id: generateId(),
        src: 'https://st.overclockers.ru/images/lab/2022/06/15/01/17_1_big.jpg',
      },
    ],
  },

  {
    title: 'Samsung Galaxy Book',
    desc: 'Samsung Galaxy Book - это серия ноутбуков от Samsung, которые предлагают высокую производительность и качественные компоненты. Вот некоторые модели, которые вы можете рассмотреть: SAMSUNG Galaxy Book2: Ноутбук с 15,6-дюймовым дисплеем, процессором Intel® Core™ i5, 8 ГБ оперативной памяти, 256 ГБ SSD, Intel Iris® Xe, Graphite1. Цена: €599.001. SAMSUNG Galaxy Book3: Ноутбук с 15,6-дюймовым дисплеем, процессором Intel® Core™ i3, 8 ГБ оперативной памяти, 256 ГБ SSD, Intel Iris® Xe, Graphite1. Цена: €469.001. SAMSUNG Galaxy Book3 360°: Ноутбук с 15,6-дюймовым дисплеем, процессором Intel® Core™ i5, 8 ГБ оперативной памяти, 512 ГБ SSD, Iris® Xe, Graphite1. Цена: €849.001. Эти ноутбуки предлагают мощные процессоры, большой объем оперативной памяти и SSD, а также высококачественные графические карты Intel для обеспечения отличной производительности. Они также оснащены высококачественными дисплеями с высоким разрешением и частотой обновления для обеспечения плавного и реалистичного геймплея234.',
    price: 450_000,
    category: CATEGORIES_DATA.category2.type,
    imgCover:
      'https://www.tadviser.ru/images/thumb/c/c7/Galaxy_Book2_Pro_PR_main3.jpg/840px-Galaxy_Book2_Pro_PR_main3.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/galaxybookpro.jpg',
      },
      {
        id: generateId(),
        src: 'https://images.samsung.com/is/image/samsung/p6pim/ru/translationfeature/163913979/ru-featureunit-light--powerful--made-to-move-in-style-531302723?$FB_TYPE_A_MO_JPG$',
      },
      {
        id: generateId(),
        src: 'https://cdn.citilink.ru/DvNTLeJHRHlxNOc5ZFQt7_IocwMiwyIbPbwgcMo9hHI/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1839803_v01_b.jpg',
      },
      {
        id: generateId(),
        src: 'https://www.zdnet.com/a/img/resize/72318b06db30363868675e06f9ea6f9f9ca743ea/2023/01/27/0b3c9dc0-2024-4b42-997e-a0bbac157656/galaxy-book-3-series.jpg?auto=webp&width=1280',
      },
      {
        id: generateId(),
        src: 'https://mobidevices.com/images/2023/02/Samsung-Galaxy-Book-3-Ultra_1.jpeg',
      },
    ],
  },

  {
    title: 'iPad',
    desc: 'iPad - это популярный планшет от Apple, который предлагает высокую производительность и качественные компоненты. Вот некоторые модели, которые вы можете рассмотреть: iPad Pro: Это ультимативное iPad-устройство с самыми передовыми технологиями. Он имеет 12,9" или 11" дисплей Liquid Retina XDR или Liquid Retina, чип M2, 12 МП ультраширокоугольную фронтальную камеру, систему камер TrueDepth, 12 МП широкоугольную камеру, 10 МП ультраширокоугольную камеру, поддержку 4K видео, ProRes, Face ID, USB‑C порт с поддержкой Thunderbolt / USB 4, 5G мобильную связь, поддержку Apple Pencil (2-го поколения) и Magic Keyboard1. iPad Air: Это мощное устройство в тонком и легком дизайне. Он имеет 10,9" дисплей Liquid Retina, чип M1, 12 МП ультраширокоугольную фронтальную камеру, 12 МП широкоугольную камеру, поддержку 4K видео, Touch ID в верхней кнопке, USB‑C порт, 5G мобильную связь, поддержку Apple Pencil (2-го поколения) и Magic Keyboard1. iPad 10. Generation: Это универсальное устройство для всего, что вы делаете каждый день. Он имеет 10,9" дисплей Liquid Retina, чип A14 Bionic, 12 МП ультраширокоугольную фронтальную камеру, 12 МП широкоугольную камеру, поддержку 4K видео, Touch ID в верхней кнопке, USB‑C порт, 5G мобильную связь, поддержку Apple Pencil и Magic Keyboard Folio1. iPad 9. Generation: Это самое доступное iPad с всем необходимым. Он имеет 10,2" дисплей Retina, чип A13 Bionic, 12 МП ультраширокоугольную фронтальную камеру, 8 МП широкоугольную камеру, поддержку 1080p видео, Touch ID в кнопке Home, порт Lightning, 4G LTE мобильную связь, поддержку Apple Pencil (1-го поколения) и Smart Keyboard1. iPad mini: Все возможности iPad теперь умещаются в одной руке. Он имеет 8,3" дисплей Liquid Retina, чип A15 Bionic, 12 МП ультраширокоугольную фронтальную камеру, 12 МП широкоугольную камеру, поддержку 4K видео, Touch ID в верхней кнопке, USB‑C порт, 5G мобильную связь, поддержку Apple Pencil (2-го поколения) и Bluetooth клавиатуры1.',
    price: 15000,
    category: CATEGORIES_DATA.category3.type,
    imgCover:
      'https://cdn.citilink.ru/Vja4WVfx_vXdAYDUlwgfkhacmVM-8JT6Lhq46iOr_yc/fit/1300/601/sm/1/plain/journal/f8d86d37-5632-46b8-940b-8ac8589732cc.png?v5.10.0',
    images: [
      {
        id: generateId(),
        src: 'https://www.ferra.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2023/07/06/09/5974249/109cbc781518ad1039c8342c07e9f9299096cd41.png',
      },
      {
        id: generateId(),
        src: 'https://images.macrumors.com/t/Op-ArH_mbIDx1Bdw7scj744cuzM=/800x0/smart/article-new/2019/03/ipad-air-2022-roundup-header.png?lossy',
      },
      {
        id: generateId(),
        src: 'https://3dnews.ru/assets/external/illustrations/2022/10/18/1075953/Apple-iPad-Pro-M2_01.jpg',
      },
      {
        id: generateId(),
        src: 'https://www.iguides.ru/upload/medialibrary/970/a3t4250lc05qx3exhmahhev6qfb7tvmh.jpg',
      },
    ],
  },
  {
    title: 'Samsung galaxy tab s7',
    desc: 'Samsung Galaxy Tab S7 - это мощный планшет, который предлагает невероятно плавную передачу изображения на экран с частотой обновления 120 Гц1. Он оснащен процессором Qualcomm Snapdragon 865+2, 6 ГБ оперативной памяти2 и 128 ГБ встроенной памяти2. Экран планшета имеет диагональ 11 дюймов и разрешение 2560 x 1600 пикселей2. Это обеспечивает четкое и яркое изображение, что делает его идеальным для просмотра видео и игр. Одной из особенностей Galaxy Tab S7 является поддержка стилуса S Pen, который обеспечивает сверхнизкую задержку при письме1. Это позволяет использовать планшет для заметок, рисования и других задач, требующих точного ввода. Планшет также оснащен мощным аккумулятором, который обеспечивает работу устройства на протяжении целого дня и даже дольше1. Благодаря поддержке зарядного устройства 45Вт, пополнить заряд можно еще быстрее1. В общем, Samsung Galaxy Tab S7 - это высокопроизводительный планшет, который идеально подходит для работы и развлечений.',
    price: 130_000,
    category: CATEGORIES_DATA.category3.type,
    imgCover: 'https://img.mvideo.ru/Pdb/30063610b.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://airoom.ru/wp-content/uploads/2021/11/samsung-galaxy-tab-s7-fe.jpeg',
      },
      {
        id: generateId(),
        src: 'https://2cent.ru/storage/photo/resized/xy_866x866/h/0sl3909nspzwqiw_e1b9d457.jpg.webp',
      },
      {
        id: generateId(),
        src: 'https://www.store123.ru/upload/medialibrary/f35/2fk2semdlnr1v92q3sddv9irf70utu0v.png',
      },
      {
        id: generateId(),
        src: 'https://connect-life.ru/upload/iblock/bd3/bd3370b439084bda7300c2c241442478.jpg',
      },
    ],
  },
  {
    title: 'Xiaomi Pad 6',
    desc: 'Xiaomi Pad 6 - это новый планшет от известного китайского производителя Xiaomi1. Он оснащен процессором Qualcomm Snapdragon 87021, оперативной памятью 6 ГБ или 8 ГБ21 и встроенной памятью 128 ГБ или 256 ГБ21. Экран планшета имеет диагональ 11 дюймов и разрешение 2880 x 1800 пикселей213. Это обеспечивает четкое и яркое изображение, что делает его идеальным для просмотра видео и игр. Одной из особенностей Xiaomi Pad 6 является его легкий вес - всего 490 г2143. Это делает его удобным для переноски и использования в пути. Планшет также оснащен мощным аккумулятором емкостью 8840 мАч21, что обеспечивает длительное время работы устройства. Благодаря поддержке быстрой зарядки, пополнить заряд можно еще быстрее1. В общем, Xiaomi Pad 6 - это высокопроизводительный планшет, который идеально подходит для работы и развлечений.',
    price: 50_000,
    category: CATEGORIES_DATA.category3.type,
    imgCover:
      'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-42/665/398/082/170/600012957402b0.jpeg',
    images: [
      {
        id: generateId(),
        src: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/204/511/758/074/96/600012692277b0.png',
      },
      {
        id: generateId(),
        src: 'https://static.baza.farpost.ru/v/1688469390942_bulletin',
      },
      {
        id: generateId(),
        src: 'https://bl-i.thgim.com/public/incoming/j3sk3j/article67044852.ece/alternates/FREE_1200/XiaomiPad6_3.JPG',
      },
    ],
  },

  {
    title: 'Mi band 6',
    desc: 'Xiaomi Mi Band 6, также известный как Xiaomi Mi Smart Band 6, это компактный фитнес-трекер, который впечатляет своими функциями12. Вот некоторые особенности этого устройства: Дисплей: У Mi Band 6 яркий, живой и отзывчивый экран1. Экран стал еще ярче и четче, что делает ежедневные статистики легко проверяемыми с первого взгляда1. Функции: Устройство предлагает множество функций для мониторинга здоровья и фитнеса1. Оно обладает функциями, которые вы бы ожидали найти в гораздо более дорогом устройстве, таких как круглосуточный мониторинг стресса и пульсоксиметр1. Тренировки: Mi Band 6 предлагает десятки режимов тренировок для выбора (как в помещении, так и на открытом воздухе), и отслеживание сердечного ритма оказалось впечатляющим в наших тестах1. Дизайн: Дизайн почти идентичен Xiaomi Mi Smart Band 5, выпущенной в прошлом году1. Цена: Очень доступная цена12. Однако есть и некоторые недостатки. Например, встроенного GPS нет12, и данные о тренировках могут быть неточными12. Кроме того, дизайн может показаться невыразительным1. Несмотря на это, Mi Band 6 - отличная альтернатива Fitbit для повседневного использования, которая предлагает гораздо больше, чем вы могли бы ожидать1.',
    price: 5_000,
    category: CATEGORIES_DATA.category4.type,
    imgCover: 'https://img.mvideo.ru/Pdb/30056458b.jpg',
    images: [
      {
        id: generateId(),
        src: 'https://ae04.alicdn.com/kf/Sadb210aac19f44c18a345a2988bf823b2.jpg',
      },
      {
        id: generateId(),
        src: 'https://static.insales-cdn.com/images/products/1/5718/426038870/Xiaomi-Mi-Band-6-7.jpg',
      },
      {
        id: generateId(),
        src: 'https://shop.mts.ru/upload/images/fitnes-braslet-xiaomi-mi-smart-band-6-1.png',
      },
      {
        id: generateId(),
        src: 'https://tehno37.ru/image/cache/catalog/1000/4-700x700.png',
      },
    ],
  },

  {
    title: 'Apple Watch',
    desc: 'Apple Watch Series 9 - это последняя модель умных часов от Apple, которая предлагает ряд новых функций и улучшений1. Вот некоторые из его особенностей: Двойной тап: Это новая функция, которая, как ожидается, будет использоваться каждый день1. Этот жест обещает стать популярным, когда он станет доступен позже в этом году1. Экран: Устройство имеет более яркий экран1. Чипсет S9: Благодаря обновленному чипсету S9, кажется, что есть по крайней мере одна действительно полезная, меняющая игру новая функция1. Экологически дружественные материалы: Переход к более экологически дружественным материалам является приветственным1. Батарея: Однако, как и в предыдущих моделях, время работы от батареи составляет 18 часов1. Несмотря на то, что многое осталось без изменений, как обычно, Watch 9, вероятно, будет лучшими часами Apple для большинства людей1. Исключения могут быть, если вы ищете настоящую бюджетную сделку, в этом случае обратите внимание на Apple Watch SE 2, или настоящую премиум-модель в Ultra 21. Учтите, что часы Apple работают только с iPhone, поэтому если вы пользователь Android, вам, возможно, захочется проверить лучшие смарт-часы для Android2.',
    price: 50_000,
    category: CATEGORIES_DATA.category4.type,
    imgCover: 'https://media.graphassets.com/F36fmAwWTxuC1zDx0a4R',
    images: [
      {
        id: generateId(),
        src: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/198/331/694/510/242/234/100040000459b0.jpg',
      },
      {
        id: generateId(),
        src: 'https://s0.rbk.ru/v6_top_pics/media/img/4/42/756627095035424.webp',
      },
    ],
  },

  {
    title: 'product 1 ',
    desc: 'Наслаждайтесь взрывом вкуса с каждым укусом наших хрустящих чипсов. Изготовленные из лучших картофельных ломтиков, они обжарены до золотистого цвета и щедро посыпаны нашей уникальной смесью специй. Эти чипсы идеально подходят для перекуса в любое время дня. Они обладают идеальным балансом между хрусткостью и вкусом, который никого не оставит равнодушным. Наслаждайтесь ими прямо из упаковки или подавайте с любимыми соусами для дополнительного вкуса. Они также идеально подходят для пикников, вечеринок или просто для удовольствия от просмотра фильма дома. “Хрустящие чипсы” - это не просто перекус, это взрыв вкуса, который заставит вас возвращаться снова и снова! 😊',
    price: 100,
    category: CATEGORIES_DATA.category5.type,
    imgCover: 'https://via.placeholder.com/200x150/F0E68C',
    images: [],
  },

  {
    title: 'product 2',
    desc: 'Этот лосьон содержит 2% миноксидила.',
    price: 200,
    category: CATEGORIES_DATA.category5.type,
    imgCover: 'https://via.placeholder.com/200x150/FF69B4',
    images: [],
  },

  {
    title: 'product 3',
    desc: 'Это средство для восстановления волос, которое можно использовать дома. Оно подходит для всех типов волос и текстур и может быть использовано еженедельно в качестве профилактики или до трех раз в неделю для восстановления поврежденных волос',
    price: 300,
    category: CATEGORIES_DATA.category5.type,
    imgCover: 'https://via.placeholder.com/200x150/7FFFD4',
    images: [],
  },

  {
    title: 'product 4',
    desc: 'Это зеленый чай, который содержит кофеин. Он может быть использован в качестве альтернативы кофе и имеет множество полезных свойств, таких как увеличение бодрости и уменьшение нервозности. Вы можете продавать этот продукт вместе с инструментами для приготовления напитка, такими как чашки для матча и бамбуковые венчики',
    price: 400,
    category: CATEGORIES_DATA.category5.type,
    imgCover: 'https://via.placeholder.com/200x150/8A2BE2',
    images: [],
  },

  {
    title: 'product 5',
    desc: 'Эта паста может быть использована людьми, которые не употребляют глютен. Она может быть использована в качестве замены обычной пасты и имеет множество вкусовых вариантов3.',
    price: 500,
    category: CATEGORIES_DATA.category5.type,
    imgCover: 'https://via.placeholder.com/200x150/FF4500',
    images: [],
  },

  {
    title: 'product 6',
    desc: 'Эта одежда становится все более популярной в последнее время. Они могут быть использованы в качестве повседневной одежды и могут быть сочетаны с различными аксессуарами',
    price: 600,
    category: CATEGORIES_DATA.category5.type,
    imgCover: 'https://via.placeholder.com/200x150/d32776',
    images: [],
  },
];

export default PRODUCT_ARRAY_DATA.map((product, index) => ({
  ...product,
  id: generateId(),
  isBasket: false,
  count: 1,
}));
