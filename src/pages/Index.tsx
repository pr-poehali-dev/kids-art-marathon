import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/b0375612-a0eb-426c-b970-c2e965bbbdc0/files/e9534a81-f7dd-40a4-8f72-d433302c9382.jpg';

const CtaButton = ({ className = '' }: { className?: string }) => (
  <Button
    size="lg"
    onClick={() =>
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
    }
    className={`rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover-scale ${className}`}
  >
    Записать ребёнка на марафон
  </Button>
);

const SectionTitle = ({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) => (
  <div className="mx-auto mb-12 max-w-2xl text-center animate-fade-up">
    {eyebrow && (
      <span className="mb-3 inline-block rounded-full bg-accent/40 px-4 py-1 text-sm font-semibold text-accent-foreground">
        {eyebrow}
      </span>
    )}
    <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
      {title}
    </h2>
    {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
  </div>
);

const Index = () => {
  const [sent, setSent] = useState(false);

  const pains = [
    { icon: 'Smartphone', text: 'Ребёнок много времени в телефоне или в компьютере, но ничего не создаёт' },
    { icon: 'Pencil', text: 'Рисование есть, но навык не развивается' },
    { icon: 'ShieldQuestion', text: 'Сложно найти современное и при этом безопасное обучение' },
    { icon: 'CloudLightning', text: 'Цифровая среда не используется для творчества' },
  ];

  const benefits = [
    { icon: 'Sparkles', title: 'Креативное мышление', text: 'Ребёнок учится придумывать и воплощать идеи' },
    { icon: 'Eye', title: 'Визуальное восприятие', text: 'Развивается насмотренность и чувство композиции' },
    { icon: 'Palette', title: 'Первый digital-опыт', text: 'Знакомство с современными инструментами творчества' },
    { icon: 'Shapes', title: 'Композиция и форма', text: 'Понимание, как строится красивая картинка' },
    { icon: 'Heart', title: 'Уверенность в идеях', text: 'Ребёнок перестаёт бояться пробовать новое' },
    { icon: 'Trophy', title: 'Итоговый проект', text: 'Своя завершённая творческая работа' },
  ];

  const program = [
    { day: 'День 1', title: 'Знакомство с digital-творчеством' },
    { day: 'День 2', title: 'Как рождается визуальная идея' },
    { day: 'День 3', title: 'Работа с образом и стилем' },
    { day: 'День 4', title: 'Превращение рисунка в digital-картинку' },
    { day: 'День 5', title: 'Создание первого цифрового проекта' },
    { day: 'День 6–7', title: 'Финальный проект и презентация работы' },
  ];

  const forWhom = [
    'Детям 7–14 лет',
    'Тем, кто любит рисовать',
    'Тем, кто интересуется творчеством',
    'Тем, кто хочет развивать воображение',
  ];

  const notForWhom = [
    'Если ребёнок совсем не интересуется творчеством',
    'Если ждёте «развлечения без обучения»',
    'Если нет желания участвовать в процессе обучения',
  ];

  const trust = [
    { icon: 'ShieldCheck', text: 'Безопасная онлайн-среда' },
    { icon: 'MousePointerClick', text: 'Простые инструменты без сложных программ' },
    { icon: 'MessagesSquare', text: 'Поддержка и понятные инструкции' },
    { icon: 'Baby', text: 'Подходит для начинающих' },
    { icon: 'Feather', text: 'Не требует опыта' },
  ];

  const reviews = [
    { name: 'Марина, мама Софии (9 лет)', text: 'Дочка впервые сама доводила проект до конца. Горящие глаза каждый вечер!', role: 'родитель' },
    { name: 'София, 9 лет', text: 'Я нарисовала кота, и он стал светиться! Это было волшебство.', role: 'участница' },
    { name: 'Дмитрий, папа Артёма (12 лет)', text: 'Наконец телефон в руках ребёнка — это про творчество, а не про залипание.', role: 'родитель' },
    { name: 'Артём, 12 лет', text: 'Теперь я знаю, как из простого рисунка сделать красивую картинку.', role: 'участник' },
    { name: 'Елена, мама Кирилла (8 лет)', text: 'Всё понятно и безопасно. Задания короткие, сын не уставал.', role: 'родитель' },
    { name: 'Ольга, мама Вари (11 лет)', text: 'Варя стала увереннее в своих идеях и гордится итоговой работой.', role: 'родитель' },
  ];

  const faq = [
    { q: 'Безопасно ли это?', a: 'Да. Марафон проходит в закрытой безопасной онлайн-среде с понятными инструкциями и поддержкой.' },
    { q: 'Нужен ли опыт рисования?', a: 'Нет. Марафон подходит для начинающих — важно только желание творить.' },
    { q: 'Сколько времени в день нужно?', a: 'Уроки короткие — 10–20 минут в день плюс простое творческое задание.' },
    { q: 'Какие программы используются?', a: 'Только простые и доступные инструменты, без сложных профессиональных программ.' },
    { q: 'Что получит ребёнок в итоге?', a: 'Свой первый цифровой проект, новые навыки и именной сертификат за завершение марафона.' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon name="Palette" size={20} />
            </div>
            <span className="font-display text-lg font-bold">Магия цифрового искусства</span>
          </div>
          <CtaButton className="hidden px-6 py-4 text-sm sm:inline-flex" />
        </div>
      </header>

      {/* HERO */}
      <section className="mesh-bg relative">
        <div className="container grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <Icon name="Sparkles" size={16} /> Онлайн-марафон для детей 7–14 лет
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Развитие творческого мышления ребёнка через{' '}
              <span className="text-primary">цифровое искусство</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Онлайн-марафон, где дети учатся создавать и оживлять собственные
              визуальные работы — спокойно, безопасно и с удовольствием.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="ShieldCheck" size={18} className="text-accent-foreground" />
                Безопасная среда · без опыта
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="animate-blob absolute -inset-4 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20" />
            <img
              src={HERO_IMG}
              alt="Дети создают цифровое искусство"
              className="relative w-full rounded-[2rem] object-cover shadow-2xl shadow-primary/20"
            />
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl animate-float-slow">
              <Icon name="Award" size={28} className="text-secondary" />
              <div>
                <p className="text-sm font-bold leading-tight">Сертификат</p>
                <p className="text-xs text-muted-foreground">за завершение</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="container py-20">
        <SectionTitle
          eyebrow="Знакомо?"
          title="Что тревожит родителей сегодня"
          sub="Мы понимаем эти переживания — и построили марафон так, чтобы их закрыть."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => (
            <div
              key={p.text}
              className="animate-fade-up rounded-3xl border border-border bg-card p-6 shadow-sm"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/20 text-secondary-foreground">
                <Icon name={p.icon} size={24} />
              </div>
              <p className="text-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mesh-bg py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Решение"
            title="Ребёнок превращает свои рисунки в цифровые работы"
            sub="Простыми шагами — от идеи до готового digital-проекта."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'Lightbulb', t: 'Придумывает идею', d: 'Учится видеть образ и замысел' },
              { icon: 'Brush', t: 'Развивает воображение', d: 'Визуальное мышление и фантазия' },
              { icon: 'Wand2', t: 'Осваивает инструменты', d: 'Современные средства творчества' },
              { icon: 'Rocket', t: 'Создаёт проект', d: 'Свои первые digital-работы' },
            ].map((s, i) => (
              <div
                key={s.t}
                className="animate-fade-up rounded-3xl bg-white p-7 text-center shadow-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="mb-1 font-display text-lg font-bold">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container py-20">
        <SectionTitle eyebrow="Результаты" title="Чем полезен марафон ребёнку" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="animate-fade-up rounded-3xl border border-border bg-card p-7 hover-scale"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/30 text-accent-foreground">
                <Icon name={b.icon} size={24} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">{b.title}</h3>
              <p className="text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM */}
      <section className="mesh-bg py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Программа"
            title="Марафон по дням"
            sub="{{program}} · короткие уроки по 10–20 минут"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {program.map((p, i) => (
              <div
                key={p.day}
                className="animate-fade-up flex items-center gap-5 rounded-3xl bg-white p-5 shadow-sm"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground">
                  {p.day}
                </div>
                <p className="font-display text-lg font-semibold">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM / NOT */}
      <section className="container py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="animate-fade-up rounded-3xl border-2 border-accent/40 bg-accent/10 p-8">
            <div className="mb-5 flex items-center gap-3">
              <Icon name="CircleCheck" size={28} className="text-accent-foreground" />
              <h3 className="font-display text-2xl font-bold">Кому подойдёт</h3>
            </div>
            <ul className="space-y-3">
              {forWhom.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="mt-0.5 shrink-0 text-accent-foreground" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-up rounded-3xl border-2 border-border bg-muted/40 p-8" style={{ animationDelay: '0.1s' }}>
            <div className="mb-5 flex items-center gap-3">
              <Icon name="CircleAlert" size={28} className="text-muted-foreground" />
              <h3 className="font-display text-2xl font-bold">Кому не подойдёт</h3>
            </div>
            <ul className="space-y-3">
              {notForWhom.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Icon name="Minus" size={20} className="mt-0.5 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST + CERTIFICATE */}
      <section className="mesh-bg py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Доверие и безопасность"
            title="Спокойно за ребёнка на каждом шаге"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trust.map((t, i) => (
              <div
                key={t.text}
                className="animate-fade-up rounded-3xl bg-white p-6 text-center shadow-sm"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/30 text-accent-foreground">
                  <Icon name={t.icon} size={24} />
                </div>
                <p className="text-sm font-medium">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Certificate */}
          <div className="mt-14 animate-fade-up overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-xl sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
                  Мотивация для ребёнка
                </span>
                <h3 className="font-display text-3xl font-bold">
                  Именной сертификат за завершение марафона
                </h3>
                <p className="mt-4 text-primary-foreground/80">
                  В финале каждый ребёнок получает красивый диплом со своим именем —
                  за смелость, старание и первый цифровой проект.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-white/30 bg-white text-center text-foreground shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/b0375612-a0eb-426c-b970-c2e965bbbdc0/files/ff076600-7f90-4f89-8e6e-2fbf736125a0.jpg"
                  alt="Сертификат участника творческого марафона"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="container py-20">
        <div className="mx-auto max-w-4xl animate-fade-up rounded-[2rem] border border-border bg-card p-8 shadow-sm sm:p-12">
          <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr]">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary text-white">
              <Icon name="User" size={56} />
            </div>
            <div>
              <span className="mb-2 inline-block rounded-full bg-accent/30 px-4 py-1 text-sm font-semibold text-accent-foreground">
                Об авторе
              </span>
              <h3 className="font-display text-2xl font-bold">Самороковская Людмила Александровна</h3>
              <p className="mt-3 text-muted-foreground">
                Педагогический и творческий опыт, работа с визуальным искусством и
                обучение детей. Спокойный, бережный подход — без давления и лишней
                сложности, с уважением к темпу каждого ребёнка.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-muted px-4 py-2">Педагог</span>
                <span className="rounded-full bg-muted px-4 py-2">Визуальное искусство</span>
                <span className="rounded-full bg-muted px-4 py-2">Работа с детьми</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="mesh-bg py-20">
        <div className="container">
          <SectionTitle eyebrow="Формат" title="Как проходит марафон" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: 'Wifi', t: 'Онлайн' },
              { icon: 'CalendarDays', t: '5–7 дней' },
              { icon: 'Clock', t: 'Уроки 10–20 минут' },
              { icon: 'ListChecks', t: 'Простые задания' },
              { icon: 'Laptop', t: 'Нужен ноутбук, MacBook или ПК' },
              { icon: 'Trophy', t: 'Итоговый проект' },
            ].map((f, i) => (
              <div
                key={f.t}
                className="animate-fade-up rounded-3xl bg-white p-6 text-center shadow-sm"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <Icon name={f.icon} size={28} className="mx-auto mb-3 text-primary" />
                <p className="font-display font-semibold">{f.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container py-20">
        <SectionTitle eyebrow="Отзывы" title="Что говорят родители и дети" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="animate-fade-up flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="mb-3 flex gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="Star" size={16} />
                ))}
              </div>
              <p className="flex-1 text-foreground">«{r.text}»</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name={r.role === 'родитель' ? 'User' : 'Smile'} size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mesh-bg py-20">
        <div className="container max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Вопросы родителей" />
          <Accordion type="single" collapsible className="animate-fade-up space-y-3">
            {faq.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-white px-5"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA / FORM */}
      <section id="register" className="container py-20">
        <div className="mx-auto max-w-2xl animate-fade-up rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-8 text-center text-white shadow-2xl sm:p-12">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
            <Icon name="Flame" size={16} /> Ограниченное количество мест
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Запишите ребёнка на марафон
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/85">
            Оставьте контакты — мы напишем детали старта и забронируем место.
            Стоимость участия: {`{{price}}`}
          </p>

          {sent ? (
            <div className="mt-8 rounded-2xl bg-white/15 p-8">
              <Icon name="PartyPopper" size={40} className="mx-auto" />
              <p className="mt-3 font-display text-xl font-bold">Заявка отправлена!</p>
              <p className="mt-1 text-white/85">Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mx-auto mt-8 max-w-md space-y-3"
            >
              <Input
                required
                placeholder="Ваше имя"
                className="h-12 rounded-xl border-0 bg-white text-foreground placeholder:text-muted-foreground"
              />
              <Input
                required
                type="tel"
                placeholder="Телефон или Telegram"
                className="h-12 rounded-xl border-0 bg-white text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 w-full rounded-xl bg-white text-base font-semibold text-primary hover:bg-white/90"
              >
                Записать ребёнка
              </Button>
              <p className="text-xs text-white/70">
                Нажимая кнопку, вы соглашаетесь на обработку данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon name="Palette" size={18} />
            </div>
            <span className="font-display font-bold text-foreground">Магия цифрового искусства</span>
          </div>
          <p>© {new Date().getFullYear()} · Творческий марафон для детей {`{{age_group}}`}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;