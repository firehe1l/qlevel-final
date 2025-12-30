import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Monitor, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle,
  ChevronRight,
  Calculator,
  Zap,
  Layers,
  MapPin,
  TrendingUp,
  Play,
  Banknote,
  Clock,
  School,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- СТИЛИ И ШРИФТЫ ---
// Подключаем шрифт Manrope прямо здесь для надежности
const fontImport = (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
    body { font-family: 'Manrope', sans-serif; }
  `}</style>
);

// --- КОМПОНЕНТЫ ---

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section 
    id={id} 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeInUp}
    className={`py-20 md:py-28 px-6 md:px-8 relative overflow-hidden ${className}`}
  >
    <div className="max-w-6xl mx-auto relative z-10">
      {children}
    </div>
  </motion.section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-[#b834c6]/10 text-[#b834c6] border border-[#b834c6]/20 px-6 py-2 rounded-full text-sm font-extrabold mb-6 uppercase tracking-wide">
    {children}
  </span>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --- КАЛЬКУЛЯТОР ---
  const [population, setPopulation] = useState(500000);
  const [fee, setFee] = useState(750000);
  const [revenue, setRevenue] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    let calculatedFee = 750000;
    if (population > 500000) {
      calculatedFee += (population - 500000);
    }
    
    // Эвристика: 17% населения
    const estClients = Math.round(population * 0.17); 

    // Расчет: (Популяция * 0.17) * 0.01 (конверсия) * 350р * 4 недели
    const estRevenue = (population * 0.17) * 0.01 * 350 * 4;

    setFee(calculatedFee);
    setClients(estClients);
    setRevenue(estRevenue);
  }, [population]);

  const formatNum = (num: number) => new Intl.NumberFormat('ru-RU').format(Math.round(num));

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#b834c6] selection:text-white overflow-x-hidden antialiased">
      {fontImport}

      {/* ФОНОВЫЕ ЭФФЕКТЫ (Light Mode) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#89c3f4]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#b834c6]/10 rounded-full blur-[120px]" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-3xl font-extrabold tracking-tight text-[#313199]">
            QLEVEL
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-bold text-gray-600">
            <a href="#about" className="hover:text-[#b834c6] transition">О продукте</a>
            <a href="#tech" className="hover:text-[#b834c6] transition">Технологии</a>
            <a href="#calculator" className="hover:text-[#b834c6] transition">Финмодель</a>
          </div>
          <button className="hidden md:block bg-[#b834c6] hover:bg-[#9d2ca9] text-white px-6 py-3 rounded-full font-bold transition shadow-lg shadow-[#b834c6]/30 hover:shadow-xl transform hover:-translate-y-0.5">
            Связаться
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 shadow-xl flex flex-col gap-4">
            <a href="#about" className="text-lg font-bold text-gray-800" onClick={() => setIsMenuOpen(false)}>О продукте</a>
            <a href="#tech" className="text-lg font-bold text-gray-800" onClick={() => setIsMenuOpen(false)}>Технологии</a>
            <a href="#calculator" className="text-lg font-bold text-gray-800" onClick={() => setIsMenuOpen(false)}>Финмодель</a>
            <button className="bg-[#b834c6] text-white py-3 rounded-xl font-bold w-full">Связаться</button>
          </div>
        )}
      </header>

      {/* БЛОК 1: ГЛАВНЫЙ ЭКРАН */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
        {/* Декоративные круги */}
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full border-4 border-[#89c3f4]/30 hidden md:block animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full border-4 border-[#b834c6]/20 hidden md:block" />

        <div className="relative z-10 text-center max-w-5xl w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge>Образовательная IT-франшиза</Badge>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 text-gray-900 text-balance tracking-tight">
            Легко зарабатывайте <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b834c6] to-[#313199] whitespace-nowrap">
              от 300 000 ₽
            </span> <br className="hidden md:block" />
            в месяц на VR&nbsp;образовании
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-balance font-medium">
            Заменяем скучные уроки в школах и детсадах на невероятные VR&nbsp;приключения. 
            Актуальный бизнес без&nbsp;аренды. Растущий рынок.
          </p>
          
          <div className="flex flex-col items-center gap-10">
            <button className="w-full md:w-auto group bg-[#b834c6] hover:bg-[#9d2ca9] text-white text-xl px-10 py-5 rounded-full font-extrabold transition flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(184,52,198,0.5)] transform hover:scale-105 active:scale-95">
              Узнать, свободен ли мой город
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition" />
            </button>

            {/* Блок ФГОС */}
            <div className="w-full max-w-lg bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-4 flex items-center gap-4 text-left shadow-lg hover:shadow-xl transition duration-300">
               <div className="w-12 h-12 rounded-full bg-[#008cf4]/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#008cf4]" />
               </div>
               <span className="text-sm md:text-base font-semibold leading-snug text-gray-700">
                 Продукт соответствует ФГОС и одобрен педагогическим сообществом
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2: ТВЕРДЫЕ ЦИФРЫ (КАРТОЧКИ) */}
      <section className="bg-[#f0f7ff] border-y border-[#89c3f4]/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "от 1.75 млн ₽", label: "Инвестиции", sub: "включая оборудование", icon: <Banknote className="w-7 h-7" />, color: "text-[#313199]" },
              { val: "от 200 000 ₽", label: "Чистая прибыль", sub: "с каждой 1000 показов", icon: <TrendingUp className="w-7 h-7" />, color: "text-[#b834c6]" },
              { val: "от 6 месяцев", label: "Окупаемость", sub: "в среднем по сети", icon: <Clock className="w-7 h-7" />, color: "text-[#008cf4]" },
              { val: "Сотни школ", label: "Рынок", sub: "в каждом городе", icon: <School className="w-7 h-7" />, color: "text-[#313199]" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center md:items-start md:text-left hover:scale-105 transition duration-300 group">
                <div className={`w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 md:hidden group-hover:bg-[#f0f7ff] transition ${item.color}`}>
                    {item.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-extrabold mb-2 ${item.color}`}>{item.val}</div>
                <div className="text-lg font-bold text-gray-900 mb-1 uppercase tracking-wide">{item.label}</div>
                <div className="text-gray-500 font-medium text-sm">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 3: В ЧЕМ СУТЬ? */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <Badge>Продукт</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-10 leading-tight text-[#313199]">Образование, которое меняет представление об&nbsp;обучении</h2>
            <div className="space-y-10">
              {[
                { 
                  icon: <Monitor className="w-6 h-6" />, 
                  title: "Иммерсивное погружение", 
                  text: "Вместо пассивного чтения — личное участие. Дети сами исследуют микромиры и изучают ПДД через VR-квесты."
                },
                { 
                  icon: <Layers className="w-6 h-6" />, 
                  title: "Больше, чем 360°", 
                  text: "Это полноценный интерактив. Дети смотрят, учатся, отвечают на тесты и взаимодействуют с объектами."
                },
                { 
                  icon: <Briefcase className="w-6 h-6" />, 
                  title: "Социальный капитал", 
                  text: "Вы продвигаете инновации. Школа получает статус «инновационной площадки», а дети — знания на всю жизнь."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#313199]/10 group-hover:bg-[#313199] group-hover:text-white transition duration-300 flex items-center justify-center text-[#313199] flex-shrink-0 mt-1 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#313199] to-[#b834c6] rounded-[2.5rem] blur-[50px] opacity-30 transform rotate-6" />
             <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl h-[400px] md:h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1592478411213-61535fdd28f2?q=80&w=1769&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="VR Education" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#313199]/90 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-bold text-2xl leading-tight">«Дети в восторге, учителя в шоке от вовлеченности»</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* БЛОК 4: ТЕХНОЛОГИЧЕСКОЕ ЛИДЕРСТВО */}
      <Section className="bg-gray-50" id="tech">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge>QBox Software</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#313199]">Уникальный софт без аналогов в России</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: <Layers className="w-8 h-8" />, 
              title: "Универсальное управление", 
              desc: "Запуск видео 360, игр, квестов и уроков в одном интерфейсе." 
            },
            { 
              icon: <Zap className="w-8 h-8" />, 
              title: "Сверхбыстрая загрузка", 
              desc: "Экономия времени оператора в десятки раз по сравнению с конкурентами." 
            },
            { 
              icon: <Monitor className="w-8 h-8" />, 
              title: "Библиотека 100+", 
              desc: "Высококачественный контент от собственной команды и мировых лидеров." 
            },
            { 
              icon: <ShieldCheck className="w-8 h-8" />, 
              title: "Разработка и поддержка", 
              desc: "Собственная IT-команда обеспечивает стабильность и минимизирует простои." 
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col">
              <div className="w-16 h-16 bg-[#008cf4]/10 text-[#008cf4] rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#313199]">{item.title}</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* БЛОК 5: МОБИЛЬНАЯ МОДЕЛЬ */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px] group border-[6px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" 
                  alt="Equipment" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#313199] via-[#313199]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-lg">
                   <h3 className="text-3xl font-extrabold text-[#b834c6] mb-1">30+ шлемов</h3>
                   <p className="text-gray-800 font-bold">Вмещаются в обычное легковое авто</p>
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-[#313199] leading-tight">Весь бизнес умещается в&nbsp;паре чемоданов</h2>
            <ul className="space-y-6">
              {[
                { 
                  icon: <MapPin className="w-6 h-6 text-white" />, 
                  title: "Никакой аренды", 
                  desc: "Нет ремонта и коммуналки. Вы сами едете туда, где уже есть ваша аудитория." 
                },
                { 
                  icon: <CheckCircle className="w-6 h-6 text-white" />, 
                  title: "Легкий старт", 
                  desc: "Нужен только менеджер (договоренности) и оператор (выезды)." 
                },
                { 
                  icon: <TrendingUp className="w-6 h-6 text-white" />, 
                  title: "Масштабируемость", 
                  desc: "Просто соберите второй «комплект» и наймите еще один экипаж." 
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg hover:border-[#b834c6]/30 transition duration-300">
                  <div className="mt-1 w-12 h-12 bg-[#b834c6] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#b834c6]/30">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* БЛОК 6: КАТАЛОГ */}
      <Section id="programs" className="bg-[#f0f7ff]">
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 bg-[#008cf4]/10 text-[#008cf4] px-5 py-2 rounded-full text-sm font-bold mb-6 border border-[#008cf4]/20">
              <Zap className="w-4 h-4" />
              <span>Обновления бесплатно и автоматически</span>
           </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#313199]">Библиотека, которая никогда не устареет</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Микромиры", desc: "Путешествие внутрь пчелы, муравейника или живой клетки.", bg: "from-amber-400 to-orange-500" },
            { title: "Астрономия", desc: "Посадка на Марс-45 и исследование Солнечной системы.", bg: "from-[#008cf4] to-[#313199]" },
            { title: "Безопасность", desc: "Интерактивные уроки ПДД и ОБЖ.", bg: "from-emerald-400 to-emerald-600" },
            { title: "Культура", desc: "Эксклюзивные туры AirPano по городам мира и странам БРИКС.", bg: "from-[#b834c6] to-pink-600" },
          ].map((item, i) => (
            <div key={i} className="group relative h-80 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-white shadow-inner border border-white/20">
                    <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-2 leading-tight">{item.title}</h3>
                <p className="text-white/90 text-sm font-medium leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
           <button className="text-[#313199] border-b-2 border-[#b834c6] hover:text-[#b834c6] transition pb-1 font-extrabold text-lg">
             Смотреть весь каталог программ
           </button>
        </div>
      </Section>

      {/* БЛОК 7: ФИНАНСЫ (КАЛЬКУЛЯТОР) */}
      <Section id="calculator">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
             <Badge>Деньги</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-[#313199]">Прозрачная экономика вашего успеха</h2>
            <ul className="space-y-6 text-lg text-gray-700 mb-8 font-medium">
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#b834c6] rounded-full mt-2.5 flex-shrink-0" />
                <span><strong className="text-gray-900">Билет:</strong> 300 ₽ (сады) / 400 ₽ (школы).</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#b834c6] rounded-full mt-2.5 flex-shrink-0" />
                <span><strong className="text-gray-900">Норматив:</strong> 1000 показов в неделю на 1 комплект.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#b834c6] rounded-full mt-2.5 flex-shrink-0" />
                <span><strong className="text-gray-900">Ваша прибыль:</strong> Роялти всего 50 ₽ с показа. Остальное — вам.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-purple-900/10">
            <div className="flex items-center gap-4 mb-8">
               <div className="bg-[#b834c6]/10 p-3 rounded-xl">
                 <Calculator className="w-8 h-8 text-[#b834c6]" />
               </div>
               <h3 className="text-2xl font-extrabold text-gray-900">Калькулятор</h3>
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-4 items-end">
                <span className="text-gray-500 font-bold text-sm uppercase tracking-wider">Население</span>
                <span className="font-extrabold text-3xl text-[#313199]">{formatNum(population)}</span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="15000000" 
                step="50000" 
                value={population} 
                onChange={(e) => setPopulation(parseInt(e.target.value))}
                className="w-full h-4 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#b834c6]"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-gray-600 font-bold text-sm md:text-base">Паушальный взнос</span>
                <span className="text-lg md:text-xl font-extrabold text-gray-900">{formatNum(fee)} ₽</span>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-gray-600 font-bold text-sm md:text-base">Потенциальные клиенты</span>
                <span className="text-lg md:text-xl font-extrabold text-gray-900">~{formatNum(clients)}</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-[#313199] rounded-2xl shadow-xl shadow-[#313199]/20 gap-2 text-center md:text-left">
                <span className="text-white/80 font-bold leading-tight">Потенциальная выручка</span>
                <span className="text-2xl md:text-3xl font-black text-white">~{formatNum(revenue)} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* БЛОК 8: ПОДДЕРЖКА */}
      <Section className="bg-[#f0f7ff]">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-[#313199]">Мы помогаем на всех этапах</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "Закупка", desc: "Поможем найти и закупить шлемы у проверенных поставщиков." },
             { title: "Техподдержка", desc: "Онбординг специалист на связи. Решаем любые вопросы." },
             { title: "Обучение", desc: "Регламенты, скрипты и пособия для переговоров." },
             { title: "Маркетинг", desc: "Готовый сайт, соцсети и рекламные материалы." },
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="w-14 h-14 bg-[#008cf4]/10 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle className="w-7 h-7 text-[#008cf4]" />
               </div>
               <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
               <p className="text-gray-600 leading-relaxed text-sm font-medium">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* БЛОК 9: КЕЙСЫ */}
      <Section>
         <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-[#313199]">Кейсы партнеров</h2>
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: "Ростов-на-Дону", res: "6 000 показов", desc: "В месяц. Флагманская сеть." },
              { city: "Красноярск", res: "1 000 показов", desc: "В месяц уже на второй месяц работы." },
              { city: "Орел и Брянск", res: "Интеграция", desc: "Успешное внедрение в фотобизнес." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition duration-300">
                <div className="text-[#008cf4] font-bold text-sm mb-4 uppercase tracking-wide bg-[#008cf4]/10 inline-block px-4 py-1.5 rounded-lg border border-[#008cf4]/20">
                  {item.city}
                </div>
                <div className="text-3xl font-extrabold mb-4 text-[#313199]">{item.res}</div>
                <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
         </div>
      </Section>

      {/* БЛОК 10: ПОДВАЛ */}
      <footer className="py-24 bg-[#313199] relative overflow-hidden text-center px-6">
        {/* Декор */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-[#b834c6] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-white">Не дайте конкурентам занять ваш город</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
            Мы закрепляем за партнером эксклюзивную территорию. Проверьте, свободен ли ваш город прямо сейчас.
          </p>
          
          <button className="w-full md:w-auto bg-[#b834c6] hover:bg-[#a02db0] text-white text-xl px-12 py-6 rounded-full font-bold transition shadow-[0_20px_50px_-12px_rgba(184,52,198,0.5)] transform hover:scale-105 mb-16 border-2 border-[#b834c6]">
            Проверить город и скачать финмодель →
          </button>
          
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm gap-6">
            <div>© 2025 QLEVEL Franchise.</div>
            <div className="flex gap-10">
              <div className="flex flex-col text-left">
                 <span className="text-white font-bold mb-1">Телефон</span>
                 <span className="hover:text-white transition cursor-pointer">+7 (999) 000-00-00</span>
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-white font-bold mb-1">Почта</span>
                 <span className="hover:text-white transition cursor-pointer">franchise@qlevel.ru</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;