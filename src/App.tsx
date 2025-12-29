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
  School
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- КОМПОНЕНТЫ ---

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section 
    id={id} 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeInUp}
    className={`py-16 md:py-24 px-6 md:px-8 relative overflow-hidden ${className}`}
  >
    <div className="max-w-6xl mx-auto relative z-10">
      {children}
    </div>
  </motion.section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-white/10 text-[#95C903] border border-[#95C903]/30 px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md">
    {children}
  </span>
);

function App() {
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
    <div className="min-h-screen bg-[#00006E] text-white font-sans selection:bg-[#95C903] selection:text-black overflow-x-hidden">
      
      {/* ФОНОВЫЕ ЭФФЕКТЫ */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#95C903]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#00006E]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-wide">
            QLEVEL
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-200">
            <a href="#about" className="hover:text-[#95C903] transition">О продукте</a>
            <a href="#tech" className="hover:text-[#95C903] transition">Технологии</a>
            <a href="#calculator" className="hover:text-[#95C903] transition">Финмодель</a>
          </div>
          <button className="bg-[#95C903] hover:bg-[#84b302] text-[#00006E] px-5 py-2.5 rounded-full text-sm font-bold transition shadow-[0_0_15px_rgba(149,201,3,0.3)]">
            Связаться
          </button>
        </div>
      </header>

      {/* БЛОК 1: ГЛАВНЫЙ ЭКРАН */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <div className="absolute inset-0 z-0">
           {/* Фон */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#00006E]/90 via-[#00006E]/70 to-[#00006E]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge>Образовательная IT-франшиза</Badge>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-balance">
            Легко зарабатывайте <br className="hidden md:block" />
            <span className="text-[#95C903] whitespace-nowrap">от 300 000 ₽</span> <br className="hidden md:block" />
            в месяц на VR&nbsp;образовании
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            Заменяем скучные уроки в школах и детсадах на невероятные VR&nbsp;приключения. 
            Актуальный бизнес без&nbsp;аренды. Растущий рынок.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <button className="w-full md:w-auto group bg-[#95C903] hover:bg-[#84b302] text-[#00006E] text-lg px-8 py-5 rounded-full font-bold transition flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(149,201,3,0.4)] transform hover:scale-105">
              Узнать, свободен ли мой город
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            {/* Блок ФГОС (Исправленный для мобилок) */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 text-left shadow-lg">
               <div className="w-10 h-10 rounded-full bg-[#95C903]/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#95C903]" />
               </div>
               <span className="text-sm font-medium leading-snug text-gray-100">
                 Продукт соответствует ФГОС и одобрен педагогическим сообществом
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2: ТВЕРДЫЕ ЦИФРЫ (КАРТОЧКИ) */}
      <section className="bg-[#000050]/50 border-y border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { val: "от 1.75 млн ₽", label: "Инвестиции", sub: "включая оборудование", icon: <Banknote className="w-6 h-6" /> },
              { val: "от 200 000 ₽", label: "Чистая прибыль", sub: "с каждой 1000 показов", icon: <TrendingUp className="w-6 h-6" /> },
              { val: "от 6 месяцев", label: "Окупаемость", sub: "в среднем по сети", icon: <Clock className="w-6 h-6" /> },
              { val: "Сотни школ", label: "Рынок", sub: "в каждом городе", icon: <School className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="bg-[#00006E] p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center text-center md:items-start md:text-left hover:border-[#95C903]/30 transition duration-300">
                <div className="w-12 h-12 bg-[#95C903]/10 rounded-full flex items-center justify-center text-[#95C903] mb-4 md:hidden">
                    {item.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#95C903] mb-2">{item.val}</div>
                <div className="text-lg font-bold text-white mb-1 uppercase tracking-wide">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 3: В ЧЕМ СУТЬ? */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-balance">Образование, которое меняет представление об&nbsp;обучении</h2>
            <div className="space-y-8">
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
                <div key={idx} className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#95C903]/20 flex items-center justify-center text-[#95C903] flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
             <div className="absolute inset-0 bg-[#95C903] rounded-[2rem] blur-[60px] opacity-20" />
             <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl h-[400px] md:h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1592478411213-61535fdd28f2?q=80&w=1769&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="VR Education" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00006E]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-lg">Инновации в каждом классе</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* БЛОК 4: ТЕХНОЛОГИЧЕСКОЕ ЛИДЕРСТВО */}
      <Section className="bg-[#000050]" id="tech">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge>QBox Software</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Уникальный софт без аналогов в России</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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
            <div key={i} className="bg-[#00006E] p-6 md:p-8 rounded-3xl border border-white/5 shadow-lg flex flex-col">
              <div className="w-14 h-14 bg-[#95C903] text-[#00006E] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#95C903]/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* БЛОК 5: МОБИЛЬНАЯ МОДЕЛЬ */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl h-[400px] md:h-[500px] group">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" 
                  alt="Equipment" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00006E] via-[#00006E]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#00006E]/90 backdrop-blur-md p-6 rounded-3xl border border-[#95C903]/30">
                   <h3 className="text-3xl font-bold text-[#95C903] mb-1">30+ шлемов</h3>
                   <p className="text-white font-medium">Вмещаются в обычное легковое авто</p>
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-balance leading-tight">Весь бизнес умещается в&nbsp;паре чемоданов</h2>
            <ul className="space-y-6">
              {[
                { 
                  icon: <MapPin className="w-6 h-6 text-[#95C903]" />, 
                  title: "Никакой аренды", 
                  desc: "Нет ремонта и коммуналки. Вы сами едете туда, где уже есть ваша аудитория." 
                },
                { 
                  icon: <CheckCircle className="w-6 h-6 text-[#95C903]" />, 
                  title: "Легкий старт", 
                  desc: "Нужен только менеджер (договоренности) и оператор (выезды)." 
                },
                { 
                  icon: <TrendingUp className="w-6 h-6 text-[#95C903]" />, 
                  title: "Масштабируемость", 
                  desc: "Просто соберите второй «комплект» и наймите еще один экипаж." 
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-start bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-[#95C903]/30 transition duration-300">
                  <div className="mt-1 w-12 h-12 bg-[#00006E] rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* БЛОК 6: КАТАЛОГ */}
      <Section id="programs">
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 bg-[#95C903]/10 text-[#95C903] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#95C903]/20">
              <Zap className="w-4 h-4" />
              <span>Обновления бесплатно и автоматически</span>
           </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Библиотека, которая никогда не устареет</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Микромиры", desc: "Путешествие внутрь пчелы, муравейника или живой клетки.", bg: "bg-amber-600" },
            { title: "Астрономия", desc: "Посадка на Марс-45 и исследование Солнечной системы.", bg: "bg-blue-600" },
            { title: "Безопасность", desc: "Интерактивные уроки ПДД и ОБЖ.", bg: "bg-emerald-600" },
            { title: "Культура", desc: "Эксклюзивные туры AirPano по городам мира и странам БРИКС.", bg: "bg-rose-600" },
          ].map((item, i) => (
            <div key={i} className="group relative h-72 rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 shadow-lg">
              <div className={`absolute inset-0 ${item.bg} opacity-60 group-hover:opacity-80 transition duration-500`} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 text-white shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-2 leading-tight">{item.title}</h3>
                <p className="text-gray-100 text-sm leading-snug font-medium opacity-90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
           <button className="text-white border-b-2 border-[#95C903] hover:text-[#95C903] transition pb-1 font-bold text-lg">
             Смотреть весь каталог программ
           </button>
        </div>
      </Section>

      {/* БЛОК 7: ФИНАНСЫ (КАЛЬКУЛЯТОР) */}
      <Section id="calculator" className="bg-[#000050]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">Прозрачная экономика вашего успеха</h2>
            <ul className="space-y-6 text-lg text-gray-200 mb-8">
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#95C903] rounded-full mt-2 flex-shrink-0" />
                <span><strong className="text-white">Билет:</strong> 300 ₽ (сады) / 400 ₽ (школы).</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#95C903] rounded-full mt-2 flex-shrink-0" />
                <span><strong className="text-white">Норматив:</strong> 1000 показов в неделю на 1 комплект.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#95C903] rounded-full mt-2 flex-shrink-0" />
                <span><strong className="text-white">Ваша прибыль:</strong> Роялти всего 50 ₽ с показа. Остальное — вам.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
               <div className="bg-[#95C903] p-2 rounded-lg">
                 <Calculator className="w-6 h-6 text-[#00006E]" />
               </div>
               <h3 className="text-2xl font-bold">Калькулятор</h3>
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-4 items-end">
                <span className="text-gray-300 font-bold text-sm uppercase">Население</span>
                <span className="font-bold text-2xl text-white">{formatNum(population)}</span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="15000000" 
                step="50000" 
                value={population} 
                onChange={(e) => setPopulation(parseInt(e.target.value))}
                className="w-full h-3 bg-[#00006E] rounded-lg appearance-none cursor-pointer accent-[#95C903] border border-white/10"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-5 bg-[#00006E] rounded-2xl border border-white/5">
                <span className="text-gray-300 font-medium text-sm md:text-base">Паушальный взнос</span>
                <span className="text-lg md:text-xl font-bold text-white">{formatNum(fee)} ₽</span>
              </div>
              <div className="flex justify-between items-center p-5 bg-[#00006E] rounded-2xl border border-white/5">
                <span className="text-gray-300 font-medium text-sm md:text-base">Потенциальные клиенты</span>
                <span className="text-lg md:text-xl font-bold text-white">~{formatNum(clients)}</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-[#95C903] rounded-2xl shadow-lg gap-2 text-center md:text-left">
                <span className="text-[#00006E] font-bold leading-tight">Потенциальная выручка</span>
                <span className="text-2xl md:text-3xl font-black text-[#00006E]">~{formatNum(revenue)} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* БЛОК 8: ПОДДЕРЖКА */}
      <Section>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-balance">Мы помогаем на всех этапах</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "Закупка", desc: "Поможем найти и закупить шлемы у проверенных поставщиков." },
             { title: "Техподдержка", desc: "Онбординг специалист на связи. Решаем любые вопросы." },
             { title: "Обучение", desc: "Регламенты, скрипты и пособия для переговоров." },
             { title: "Маркетинг", desc: "Готовый сайт, соцсети и рекламные материалы." },
           ].map((item, i) => (
             <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:bg-white/10 transition shadow-lg">
               <div className="w-12 h-12 bg-[#95C903]/20 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle className="w-6 h-6 text-[#95C903]" />
               </div>
               <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
               <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* БЛОК 9: КЕЙСЫ */}
      <Section className="bg-[#000050]">
         <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Кейсы партнеров</h2>
         <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Ростов-на-Дону", res: "6 000 показов", desc: "В месяц. Флагманская сеть." },
              { city: "Красноярск", res: "1 000 показов", desc: "В месяц уже на второй месяц работы." },
              { city: "Орел и Брянск", res: "Интеграция", desc: "Успешное внедрение в фотобизнес." }
            ].map((item, i) => (
              <div key={i} className="bg-[#00006E] p-8 rounded-[2rem] border border-white/10 shadow-xl hover:-translate-y-2 transition duration-300">
                <div className="text-[#95C903] font-bold text-lg mb-4 uppercase tracking-wide bg-[#95C903]/10 inline-block px-3 py-1 rounded-lg">
                  {item.city}
                </div>
                <div className="text-3xl font-bold mb-4 text-white">{item.res}</div>
                <p className="text-gray-300 font-medium">{item.desc}</p>
              </div>
            ))}
         </div>
      </Section>

      {/* БЛОК 10: ПОДВАЛ */}
      <footer className="py-24 bg-[#000040] relative overflow-hidden text-center px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-balance">Не дайте конкурентам занять ваш город</h2>
          <p className="text-xl text-gray-300 mb-12 text-balance">
            Мы закрепляем за партнером эксклюзивную территорию. Проверьте, свободен ли ваш город прямо сейчас.
          </p>
          
          <button className="w-full md:w-auto bg-[#95C903] text-[#00006E] hover:bg-white text-xl px-12 py-6 rounded-full font-bold transition shadow-[0_0_40px_rgba(149,201,3,0.3)] transform hover:scale-105 mb-16">
            Проверить город и скачать финмодель →
          </button>
          
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-6">
            <div>© 2025 QLEVEL Franchise.</div>
            <div className="flex gap-8">
              <div className="flex flex-col text-left">
                 <span className="text-white font-bold mb-1">Телефон</span>
                 <span>+7 (999) 000-00-00</span>
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-white font-bold mb-1">Почта</span>
                 <span>franchise@qlevel.ru</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;