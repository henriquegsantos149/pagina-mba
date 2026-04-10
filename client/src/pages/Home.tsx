import { BookOpen, Clock, Users, Award, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function Home() {
  const modules = [
    {
      number: 1,
      title: "Ambiental Trends: Análises de Futuring & Modelos de Negócios",
      objective: "Discutir tendências emergentes no setor ambiental, utilizando ferramentas de análise de futuro (futuring) e de modelagem de negócios.",
      focus: "Aplicação de métodos de prospecção para identificar oportunidades de inovação e estruturar modelos de negócio adaptados às mudanças do mercado ambiental."
    },
    {
      number: 2,
      title: "Fundamentos de Programação para Ciência de Dados Ambientais",
      objective: "Introduzir a lógica de programação e sua aplicação no tratamento e análise de dados ambientais.",
      focus: "Criação de scripts básicos que automatizem processos de manipulação e organização de dados, facilitando análises em diferentes contextos ambientais."
    },
    {
      number: 3,
      title: "Inteligência Artificial e Aprendizado de Máquinas",
      objective: "Apresentar conceitos de inteligência artificial e machine learning voltados para análise e tomada de decisão em projetos ambientais.",
      focus: "Construção e aplicação de modelos de aprendizado de máquina para classificação, previsão e identificação de padrões ambientais."
    },
    {
      number: 4,
      title: "Gerenciamento de Bancos de Dados e Big Data aplicado ao Setor Ambiental",
      objective: "Ensinar os fundamentos da organização e gestão de grandes bases de dados ambientais.",
      focus: "Estruturação de bancos de dados, realização de consultas e uso de ferramentas de big data para análise em larga escala no setor ambiental."
    },
    {
      number: 5,
      title: "Geotecnologias aplicadas à área ambiental",
      objective: "Explorar conceitos e aplicações de geoprocessamento e SIG no setor ambiental.",
      focus: "Produção de mapas digitais e execução de análises espaciais que auxiliam na gestão de recursos naturais e territoriais."
    },
    {
      number: 6,
      title: "Sensoriamento Remoto e Processamento Digital de Imagens",
      objective: "Abordar os fundamentos do sensoriamento remoto e do processamento digital de imagens para o monitoramento ambiental.",
      focus: "Utilização de imagens orbitais e aéreas em análises ambientais, possibilitando identificação de mudanças e elaboração de produtos cartográficos."
    },
    {
      number: 7,
      title: "Gestão de Risco e Sustentabilidade Corporativa",
      objective: "Desenvolver conhecimentos sobre metodologias de gestão de riscos e sua aplicação em contextos empresariais.",
      focus: "Elaboração de estratégias de mitigação e implementação de práticas de sustentabilidade em organizações e projetos ambientais."
    },
    {
      number: 8,
      title: "Modelagem e Análise de Decisão em Contextos Ambientais",
      objective: "Ensinar técnicas de modelagem e de análise de decisão aplicadas a problemas complexos da área ambiental.",
      focus: "Uso de modelos preditivos e simulações para subsidiar decisões estratégicas em projetos e políticas ambientais."
    },
    {
      number: 9,
      title: "WebMaps e Dashboards: Visualização Interativa de Dados",
      objective: "Capacitar na criação de produtos digitais interativos para comunicar informações ambientais de forma acessível e clara.",
      focus: "Desenvolvimento de mapas online e dashboards dinâmicos para apresentação de dados e resultados ambientais a gestores, clientes e órgãos públicos."
    },
    {
      number: 10,
      title: "Escritório de Projetos Ágil (Tailoring, Modelos, Métodos e Artefatos)",
      objective: "Estudar fundamentos de gestão ágil aplicados ao planejamento e execução de projetos no setor ambiental.",
      focus: "Organização de processos e adaptação de métodos ágeis para otimizar prazos, recursos e entregas em projetos de dados ambientais."
    }
  ];

  const teachers = [
    {
      name: "Henrique Gonzalez",
      title: "Engenheiro Ambiental",
      bio: "Engenheiro Ambiental formado pela UFRJ, com estudos na University of Technology em Sydney, na Austrália e vivência em consultoria com análise espacial de dados e monetização a partir da produção de mapas."
    },
    {
      name: "Marlon Fernandes de Souza",
      title: "Doutor em Engenharia Agrícola",
      bio: "Doutor em Engenharia Agrícola pela Faculdade de Engenharia Agrícola (FEAGRI) da Unicamp, na área de Gestão de Sistemas na Agricultura e Desenvolvimento Rural."
    },
    {
      name: "Lucas Baldoni",
      title: "Doutor em Análise Ambiental",
      bio: "Mestre e Doutor em Análise Ambiental e Dinâmica Territorial pela UNICAMP. Realizou Pós-Doutorado em análises espaciais na USP."
    },
    {
      name: "Vitor do Sacramento",
      title: "Geólogo",
      bio: "Geólogo (UNB) com MBA em Administração de Bancos de Dados."
    },
    {
      name: "Vitor Amorim",
      title: "Especialista em Sustentabilidade",
      bio: "Especialista em Sustentabilidade e Mudanças Climáticas na Neoenergia S.A., possui pós-graduação em Gestão Sustentável de Energia pela COPPE UFRJ/AHK."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Ambiental Pro" className="h-10 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">Início</a>
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href="#conteudo" className="nav-link">Conteúdo</a>
            <a href="#docentes" className="nav-link">Docentes</a>
            <a href="#contato" className="nav-link">Contato</a>
          </nav>
          <button className="cta-button">Conheça o MBA</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-subtitle">MBA</p>
            <h1 className="section-title mb-6">
              Inteligência de Dados Ambientais
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pós-Graduação que desenvolve habilidades práticas, técnicas e gerenciais em tecnologias inovadoras na área ambiental, com uma abordagem abrangente e atualizada sobre gestão, análise e visualização de dados.
            </p>
            <div className="flex gap-4">
              <button className="cta-button">Saber Mais</button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-primary/10 transition-colors">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <p className="section-subtitle !mb-0 !text-lg font-bold">Homologação MEC (Nota 5)</p>
            <img src="/mec-logo.png" alt="Selo MEC" className="h-10 w-auto object-contain drop-shadow-md" />
          </div>
          <h2 className="section-title mb-12">Sobre o Programa</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Reconhecido pelo MEC</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MBA em conjunto com a Universidade Anhanguera. Há mais de 25 anos a Anhanguera faz parte do futuro de diversos estudantes, com cursos de graduação, pós-graduação e de extensão, em diversas áreas do conhecimento.
              </p>
              <p className="text-foreground">
                São cerca de <span className="text-primary font-semibold">15 mil profissionais e professores</span>, <span className="text-primary font-semibold">25 anos de tradição</span> em ensino superior, <span className="text-primary font-semibold">+150 cursos estrelados</span> no guia do estudante e <span className="text-primary font-semibold">+360 cursos</span> conceito positivo no MEC.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-accent bg-card p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Título</h4>
                    <p className="text-muted-foreground">Especialista - Estrategista de Dados Ambientais</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed border-accent bg-card p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Pré-requisitos</h4>
                    <p className="text-muted-foreground">Ensino Superior Completo</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed border-accent bg-card p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Carga Horária</h4>
                    <p className="text-muted-foreground">400 horas</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed border-accent bg-card p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Modalidade</h4>
                    <p className="text-muted-foreground">100% EAD (Ensino à Distância), com aulas gravadas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corpo Docente Section */}
      <section id="docentes" className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <p className="section-subtitle">Especialistas</p>
          <h2 className="section-title mb-12">Corpo Docente</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, idx) => (
              <div key={idx} className="border-2 border-dashed border-accent bg-card p-6 rounded-lg hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground text-center mb-1">{teacher.name}</h3>
                <p className="text-sm text-primary text-center mb-4 font-semibold uppercase">{teacher.title}</p>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">{teacher.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo Programático Section */}
      <section id="conteudo" className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <p className="section-subtitle">Módulos</p>
          <h2 className="section-title mb-12">Conteúdo Programático</h2>
          <div className="space-y-6">
            {modules.map((module) => (
              <div key={module.number} className="border-2 border-dashed border-accent bg-card p-6 rounded-lg hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{module.number}</span>
                  </div>
                  <div className="flex-1 flex items-center">
                    <h3 className="text-xl font-bold text-foreground">{module.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-32 border-b border-border">
        <div className="container text-center">
          <h2 className="section-title mb-6">Pronto para Transformar Sua Carreira?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Capacite-se com as tecnologias mais inovadoras do setor ambiental e torne-se um especialista em dados ambientais.
          </p>
          <a href="https://api.whatsapp.com/send?phone=5521988374133&text=Quero%20ser%20atendido(a)%20pela%20equipe%20Ambiental%20Pro" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold uppercase text-sm hover:opacity-90 transition-opacity">Gostaria de Mais Informações</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">AMBIENTAL MBA</h4>
              <p className="text-muted-foreground text-sm">Inteligência de Dados Ambientais</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Conteúdo</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Docentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="tel:+5531999999999" className="hover:text-primary transition-colors">+55 (31) 9999-9999</a></li>
                <li><a href="mailto:contato@ambientalpro.com" className="hover:text-primary transition-colors">contato@ambientalpro.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Parceiros</h4>
              <p className="text-muted-foreground text-sm">Universidade Anhanguera</p>
              <p className="text-muted-foreground text-sm">Ambiental Pro</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 Ambiental MBA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
