/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  ArrowRight, 
  Play, 
  Search, 
  ShoppingBag, 
  Menu, 
  ChevronRight,
  Award
} from "lucide-react";

export default function ByloStaloBorkStyle() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const products = [
    {
      id: 1,
      name: "S800",
      category: "СОКОВЫЖИМАЛКИ",
      title: "Энергия в каждой капле",
      image: "https://picsum.photos/seed/juicer/1200/1600",
      price: "125 000 ₽"
    },
    {
      id: 2,
      name: "G801",
      category: "ГРИЛИ",
      title: "Профессиональный стейк дома",
      image: "https://picsum.photos/seed/grill/1200/1600",
      price: "185 000 ₽"
    },
    {
      id: 3,
      name: "C805",
      category: "КОФЕМАШИНЫ",
      title: "Бариста в вашем доме",
      image: "https://picsum.photos/seed/coffee/1200/1600",
      price: "345 000 ₽"
    },
    {
      id: 4,
      name: "K703",
      category: "ЧАЙНИКИ",
      title: "Искусство чаепития",
      image: "https://picsum.photos/seed/kettle2/1200/1600",
      price: "65 000 ₽"
    }
  ];

  const stories = [
    {
      title: "Искусство кофе",
      description: "Как выбрать идеальные зерна для вашей кофемашины.",
      image: "https://picsum.photos/seed/story1/800/1000"
    },
    {
      title: "Секреты гриля",
      description: "5 правил идеальной прожарки от шеф-повара.",
      image: "https://picsum.photos/seed/story2/800/1000"
    },
    {
      title: "Здоровье и вкус",
      description: "Почему холодный отжим — это будущее нутрициологии.",
      image: "https://picsum.photos/seed/story3/800/1000"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-orange-50/90 antialiased font-sans overflow-x-hidden selection:bg-bork-orange selection:text-black">
      {/* NAVIGATION - REFINED SPLIT HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-orange-900/30">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <div className="flex-1 hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-bork-orange transition-colors">Коллекции</a>
            <a href="#" className="hover:text-bork-orange transition-colors">Новинки</a>
            <a href="#" className="hover:text-bork-orange transition-colors">Подарки</a>
          </div>

          <div className="flex-shrink-0 text-[24px] font-black tracking-[0.6em] uppercase text-center text-gradient">
            BYLO–STALO
          </div>

          <div className="flex-1 flex justify-end items-center gap-8">
            <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-[0.3em] uppercase">
              <a href="#" className="hover:text-bork-orange transition-colors">Бутики</a>
              <a href="#" className="hover:text-bork-orange transition-colors">Сервис</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-bork-orange transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-bork-orange transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-bork-orange rounded-full"></span>
              </button>
              <button className="lg:hidden p-2 hover:text-bork-orange">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION - MORE DRAMATIC */}
        <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ scale, opacity }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
            <img 
              src="https://picsum.photos/seed/luxury-kitchen/1920/1080" 
              className="w-full h-full object-cover opacity-40"
              alt="Hero"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="relative z-20 text-center px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h2 className="text-[11px] font-bold tracking-[0.8em] uppercase mb-8 text-bork-orange">Atelier Kitchen 2026</h2>
              <h1 className="text-[5vw] font-black tracking-tighter leading-[0.85] mb-12 text-balance text-orange-50">
                ТЕХНОЛОГИИ <br /> <span className="text-gradient">ВДОХНОВЕНИЯ</span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button className="bg-orange-gradient text-black px-16 py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(255,102,0,0.3)]">
                  Смотреть каталог
                </button>
                <button className="flex items-center gap-4 text-[11px] font-bold tracking-[0.3em] uppercase group text-orange-50">
                  <div className="w-12 h-12 rounded-full border border-bork-orange/40 flex items-center justify-center group-hover:border-bork-orange group-hover:bg-bork-orange group-hover:text-black transition-all duration-500">
                    <Play className="w-4 h-4 fill-current ml-1" />
                  </div>
                  <span className="group-hover:text-bork-orange transition-colors">Философия бренда</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6 opacity-30">
            <div className="w-[1px] h-20 bg-gradient-to-b from-bork-orange to-transparent"></div>
          </div>
        </section>

        {/* PRODUCT GRID - CLEANER & MORE SPACIOUS */}
        <section className="py-40 px-6 md:px-12 bg-black">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
              <div className="max-w-2xl">
                <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-6 text-bork-orange">Техника</h3>
                <h2 className="text-[4vw] font-black leading-[1] tracking-tighter text-orange-50">Инструменты для <br /> <span className="text-orange-900/60">кулинарных открытий</span></h2>
              </div>
              <button className="group flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase border-b border-orange-900/40 pb-2 text-orange-50 hover:text-bork-orange hover:border-bork-orange transition-all">
                Все категории <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
              {products.map((product, i) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-orange-950/20 mb-10 relative border border-orange-900/20">
                    <img 
                      src={product.image} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
                      alt={product.name}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-8 left-8">
                      <span className="text-[9px] font-bold tracking-[0.3em] uppercase bg-bork-orange text-black px-3 py-1.5">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-[22px] font-bold tracking-tight text-orange-50 group-hover:text-bork-orange transition-colors">{product.name}</h4>
                      <span className="text-[15px] font-medium text-bork-orange">{product.price}</span>
                    </div>
                    <p className="text-[13px] text-orange-900/60 font-medium tracking-wide">{product.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FLAGSHIP FOCUS - S800 JUICER */}
        <section className="py-40 bg-bork-gradient text-orange-50 overflow-hidden border-y border-orange-900/20">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 space-y-10"
            >
              <div className="inline-block px-4 py-1 border border-bork-orange text-bork-orange text-[10px] font-bold tracking-[0.4em] uppercase">
                Флагман
              </div>
              <h2 className="text-[5vw] font-black leading-none tracking-tighter">S800 <br /> <span className="text-gradient">Золотой стандарт</span></h2>
              <p className="text-[18px] text-orange-100/60 leading-relaxed max-w-lg">
                Первая в мире соковыжималка с системой холодного отжима и титановым фильтром. Сохраняет 100% витаминов и энзимов благодаря низкооборотной технологии.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-6">
                <div className="space-y-2">
                  <div className="text-[24px] font-bold text-bork-orange">45 об/мин</div>
                  <div className="text-[11px] text-orange-900/80 uppercase tracking-widest font-bold">Скорость отжима</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[24px] font-bold text-bork-orange">Титан</div>
                  <div className="text-[11px] text-orange-900/80 uppercase tracking-widest font-bold">Материал фильтра</div>
                </div>
              </div>
              <button className="group flex items-center gap-6 pt-10">
                <div className="w-16 h-16 rounded-full border border-bork-orange/20 flex items-center justify-center group-hover:bg-bork-orange group-hover:text-black transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase group-hover:text-bork-orange transition-colors">Подробнее о модели</span>
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex-1 relative"
            >
              <div className="absolute inset-0 bg-bork-orange/10 blur-[120px] rounded-full"></div>
              <img 
                src="https://picsum.photos/seed/juicer-flagship/1200/1200" 
                className="relative z-10 w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)] opacity-80"
                alt="S800 Flagship"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* MAGAZINE / STORIES SECTION */}
        <section className="py-40 bg-black">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <h3 className="text-[11px] font-bold tracking-[0.5em] uppercase mb-6 text-bork-orange">Журнал</h3>
              <h2 className="text-[3.5vw] font-bold tracking-tight text-orange-50">Мир <span className="text-gradient">BYLO–STALO</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {stories.map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-8 relative border border-orange-900/20">
                    <img 
                      src={story.image} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-50 group-hover:opacity-100"
                      alt={story.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-10 left-10 right-10">
                      <h4 className="text-[24px] font-bold mb-3 text-orange-50 group-hover:text-bork-orange transition-colors">{story.title}</h4>
                      <p className="text-[14px] text-orange-900/60 line-clamp-2 mb-6 group-hover:text-orange-100/80 transition-colors">{story.description}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-bork-orange">
                        Читать далее <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GIFT GUIDE - MINIMAL BANNER */}
        <section className="py-20 bg-orange-gradient text-black">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 border-2 border-black/20 flex items-center justify-center">
                <Award className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-[24px] font-bold tracking-tight">Искусство дарить</h3>
                <p className="text-[14px] opacity-80 uppercase tracking-widest font-bold">Эксклюзивная упаковка и персональный консьерж</p>
              </div>
            </div>
            <button className="bg-black text-bork-orange px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-orange-950 transition-all shadow-xl">
              Выбрать подарок
            </button>
          </div>
        </section>

        {/* BOUTIQUE - REFINED MAP STYLE */}
        <section className="py-40 bg-black relative overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h3 className="text-[11px] font-bold tracking-[0.5em] uppercase text-bork-orange">Бутики</h3>
              <h2 className="text-[4vw] font-bold leading-tight tracking-tight text-orange-50">Пространство <br /> <span className="text-orange-900/60">совершенства</span></h2>
              <p className="text-[18px] text-orange-100/40 leading-relaxed max-w-lg">
                Наши бутики — это не просто магазины. Это ателье вкуса, где вы можете познакомиться с техникой в атмосфере исключительного комфорта.
              </p>
              <div className="space-y-8">
                <div className="border-l-2 border-orange-900/30 pl-8 hover:border-bork-orange transition-colors cursor-pointer group">
                  <h5 className="text-[18px] font-bold mb-2 text-orange-50 group-hover:text-bork-orange transition-colors">Москва, Красная площадь</h5>
                  <p className="text-[13px] text-orange-900/60 uppercase tracking-widest">Флагманский бутик • ГУМ</p>
                </div>
                <div className="border-l-2 border-orange-900/30 pl-8 hover:border-bork-orange transition-colors cursor-pointer group">
                  <h5 className="text-[18px] font-bold mb-2 text-orange-50 group-hover:text-bork-orange transition-colors">Санкт-Петербург, Невский проспект</h5>
                  <p className="text-[13px] text-orange-900/60 uppercase tracking-widest">Концепт-стор • Пассаж</p>
                </div>
              </div>
              <button className="bg-orange-gradient text-black px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:scale-105 transition-all">
                Найти ближайший бутик
              </button>
            </div>

            <div className="relative aspect-[4/5] lg:aspect-square bg-orange-950/20 rounded-sm overflow-hidden border border-orange-900/20">
              <img 
                src="https://picsum.photos/seed/boutique-interior/1200/1200" 
                className="w-full h-full object-cover opacity-40"
                alt="Boutique Interior"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[40px] border-black/90 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER - MINIMAL */}
        <section className="py-40 bg-bork-gradient text-center border-t border-orange-900/20">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-[40px] font-bold mb-6 tracking-tight text-orange-50">Привилегии <span className="text-gradient">клуба</span></h2>
            <p className="text-orange-900/60 mb-12 text-[15px] leading-relaxed">Подпишитесь, чтобы получать приглашения на закрытые презентации и новости о лимитированных сериях.</p>
            <form className="relative max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш Email" 
                className="w-full bg-transparent border-b border-bork-orange/30 px-0 py-4 text-[16px] text-orange-50 focus:outline-none focus:border-bork-orange transition-colors placeholder:text-orange-900/40"
              />
              <button className="absolute right-0 bottom-4 text-[10px] font-bold tracking-[0.3em] uppercase text-bork-orange hover:text-orange-50 transition-colors">
                Отправить
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER - REFINED */}
      <footer className="bg-black py-24 border-t border-orange-900/20">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-[22px] font-black tracking-[0.6em] uppercase mb-10 text-gradient">BYLO–STALO</div>
            <p className="text-orange-900/60 text-[13px] leading-relaxed max-w-xs">
              Культура превосходства в каждой детали. Мы создаем технику, которая становится частью вашей семейной истории.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-8 uppercase tracking-[0.2em] text-[11px] text-bork-orange">Продукция</h5>
            <ul className="space-y-4 text-orange-900/60 text-[13px]">
              <li><a href="#" className="hover:text-bork-orange transition-colors">Кофемашины</a></li>
              <li><a href="#" className="hover:text-bork-orange transition-colors">Грили</a></li>
              <li><a href="#" className="hover:text-bork-orange transition-colors">Соковыжималки</a></li>
              <li><a href="#" className="hover:text-bork-orange transition-colors">Чайники</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-8 uppercase tracking-[0.2em] text-[11px] text-bork-orange">Покупателям</h5>
            <ul className="space-y-4 text-orange-900/60 text-[13px]">
              <li><a href="#" className="hover:text-bork-orange transition-colors">Оплата и доставка</a></li>
              <li><a href="#" className="hover:text-bork-orange transition-colors">Гарантия и сервис</a></li>
              <li><a href="#" className="hover:text-bork-orange transition-colors">Клубные карты</a></li>
              <li><a href="#" className="hover:text-bork-orange transition-colors">Корпоративным клиентам</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-8 uppercase tracking-[0.2em] text-[11px] text-bork-orange">Контакты</h5>
            <ul className="space-y-4 text-orange-900/60 text-[13px]">
              <li><a href="tel:88000000000" className="hover:text-bork-orange transition-colors">8 800 000 00 00</a></li>
              <li><a href="#" className="hover:text-bork-orange transition-colors">Написать нам</a></li>
              <li className="pt-4 flex gap-6">
                <a href="#" className="hover:text-bork-orange transition-colors">TG</a>
                <a href="#" className="hover:text-bork-orange transition-colors">VK</a>
                <a href="#" className="hover:text-bork-orange transition-colors">YT</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 mt-24 pt-12 border-t border-orange-900/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-orange-900/40 uppercase tracking-[0.2em]">
          <span>© 2026 BYLO-STALO ATELIER. Все права защищены.</span>
          <div className="flex gap-10">
            <a href="#" className="hover:text-bork-orange transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-bork-orange transition-colors">Оферта</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
