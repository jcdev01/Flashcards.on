const DATA = [
{s:"Direito Administrativo", f:"Avocar competência",b:"A autoridade superior pode avocar(chamar para si) a competência de um órgão inferior quando:\n\nHá relação  de hierarquia\nFor tempóraria e excepcional\nHouver motivo relevante e justificado "},
{s:"Direito Administrativo", f:"Abuso de poder: excesso x desvio", b:"Excesso de poder → agente ultrapassa o limite da sua competência\nDesvio de poder → agente age dentro da competência, mas com finalidade errada"},
{s:"Direito Administrativo", f:"Administração pública  — sentido objetivo(funcional ou material)", b:"Conjunto de atividades administrativas exercidas pelo Estado\nPergunta-chave: \"O que é feito?\""},
{s:"Direito Administrativo", f:"Administração pública  — sentido subjetivo(formal ou orgânico)", b:"Conjunto de entidades e agentes públicos encarregados de exercer atividade do Estado\nPergunta-chave: \"Quem faz?\""},
{s:"Direito Administrativo", f:"Autarquias — cargos de chefia", b:"Cargos de chefia são de livre nomeação e exoneração\nAutarquias especiais → dirigente com mandato fixo/temporário; exercício regular até o fim do mandato; vedada exoneração livre"},
{s:"Direito Administrativo", f:"Autotutela", b:"A administração pública possui o poder de controlar os próprios atos: anulando-os quando ilegais e revogando-os quando inconvenientes ou inoportunos"},
{s:"Direito Administrativo", f:"Bens públicos: uso comum, especial, dominical", b:"Uso comum → de todos, sem dono específico\nUso especial → do serviço, afeto à função pública\nDominicais → do patrimônio, sem função no momento"},
{s:"Direito Administrativo", f:"Desconcentração x descentralização", b:"Desconcentração → divisão interna de competências dentro da MESMA pessoa jurídica\nDescentralização → transferência de competência para OUTRA pessoa jurídica"},
{s:"Direito Administrativo", f:"Efeitos retorativos dos atos administrativos", b:"A única extinção de ato administrativo que gera efeitos retorativos é a anulação"},
{s:"Direito Administrativo", f:"Excludentes de responsabilidade civil do Estado", b:"Culpa exclusiva da vítima\nCulpa exclusiva de terceiro\nCaso fortuito ou força maior\nAusência de nexo causal"},
{s:"Direito Administrativo", f:"Extinção dos atos administrativos -Poder Judiciário", b:"O poder judiciário pode anular atos administrativos ilegais, mas não pode revogá-los."},
{s:"Direito Administrativo", f:"Extinção dos atos administrativos", b:"Anulação → ato ilegal, gera efeitos retorativos\nRevogação → ato inconveniente/inoportuno,\nCassação → quando beneficiário(pessoa autorizada) descumpre pré condições\nCaducidade → Lei posterior torna invalido ato administrativo\nContraposição → ato administrativo é substituído por outro"},
{s:"Direito Administrativo", f:"Hipóteses de inexigibilidade (FACAS)", b:"Fornecedor exclusivo\nArtista consagrado\nCredenciamento\nAquisição de imóvel único\nServiço de natureza técnica singular/predominantemente intelectual"},
{s:"Direito Administrativo", f:"Inexigibilidade x Dispensa", b:"Inexigibilidade → não há competição possível, por isso não se exige licitação\nDispensa → há competição, mas a lei dispensa a licitação"},
{s:"Direito Administrativo", f:"Licitação — modalidade culposa", b:"Nos crimes de licitação não é admitida a modalidade culposa"},
{s:"Direito Administrativo", f:"Licitação — fases",b:"I-preparação → estudo técnico preliminar, termo de referência ou projeto básico, orçamento estimativo\nII-publicação do edital → divulgação do edital e recebimento das propostas\nIII-Apresentação  de propostas → análise das propostas e classificação\nIV-julgamento → análise das propostas e classificação\nV-habilitação → análise da documentação do vencedor\nVI-Fase recursal → análise de recursos administrativos\nVII-homologação → homologação do vencedor e adjudicação do objeto"},
{s:"Direito Administrativo", f:"Modalidades de licitação", b:"Concorrência, Concurso, Leilão, Pregão, Diálogo Competitivo"},
{s:"Direito Administrativo", f:"Modalidades de licitação — critérios", b:"Concorrência → obras, serviços e compras de grande vulto\nConcurso → trabalhos técnicos, científicos ou artísticos\nLeilão → venda de bens móveis e imóveis\nPregão → bens e serviços comuns\nDiálogo competitivo → bens e serviços complexos"},
{s:"Direito Administrativo", f:"Princípios da Administração Pública (LIMPE)", b:"Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência"},
{s:"Direito Administrativo", f:"Princípios dos atos administrativos", b:"Presunção (de legitimidade)\nImperatividade\nAutoexecutoriedade\nTipicidade"},
{s:"Direito Administrativo", f:"Requisitos dos atos administrativos", b:"Objeto → resultado prático\nFinalidade → interesse público\nMotivo → situação de fato\nMotivação → explicação\nForma → como é feito"},
{s:"Direito Administrativo", f:"Responsabilidade civil do Estado -Atenuação", b:"Atenuação da responsabilidade civil do Estado:\n\nCulpa concorrente da vítima\nCulpa concorrente de terceiro"},
{s:"Direito Administrativo", f:"Responsabilidade civil do Estado", b:"Ato lícito → princípio da isonomia\nAto ilícito → princípio da legalidade"},
{s:"Direito Constitucional", f:"Ação popular — quem pode propor", b:"Apenas uma pessoa física pode propor a ação popular"},
{s:"Direito Constitucional", f:"Art. 5º — caput", b:"Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo aos brasileiros e estrangeiros residentes no país a inviolabilidade do direito à vida, liberdade, igualdade, segurança e propriedade"},
{s:"Direito Constitucional", f:"Cassação de direitos políticos", b:"É vedada a cassação dos direitos políticos em todos os casos"},
{s:"Direito Constitucional", f:"Competência comum — verbos-chave", b:"Verbos como \"proteger, cuidar, tutelar, acompanhar\" indicam competência comum entre União, Estados, DF e Municípios"},
{s:"Direito Constitucional", f:"Competências privativas da União (mnemônico: CAPACETE DE PMS)", b:"Civil, Agrário, Penal, Aeronáutico, Comercial, Eleitoral, Trabalho/transporte/trânsito, Espacial, Desapropriação, Processual, Marítimo, Seguro social"},
{s:"Direito Constitucional", f:"Concessão, permissão e autorização", b:"União → concessão, permissão e autorização\nEstados → apenas concessão\nMunicípios → concessão e permissão"},
{s:"Direito Constitucional", f:"Direitos negativos x positivos", b:"Direitos negativos (1ª geração) → o Estado NÃO pode interferir\nDireitos positivos (2ª geração) → o Estado TEM o dever de intervir"},
{s:"Direito Constitucional", f:"Distrito Federal — competência legislativa", b:"O Distrito Federal legisla tanto como Estado quanto como Município"},
{s:"Direito Constitucional", f:"Inafiançável, imprescritível, insuscetível", b:"Inafiançável → não admite fiança\nImprescritível → não perde validade com o tempo\nInsuscetível de graça ou anistia → não pode receber indulto/perdão"},
{s:"Direito Constitucional", f:"Remédios constitucionais I", b:"Habeas Corpus → protege a liberdade de locomoção (repressivo e preventivo)\nMandado de Segurança → protege direito líquido e certo não amparado por HC ou HD, contra ilegalidade/abuso de autoridade\nHabeas data → Garante o conhecimento e correção  de dados pessoais em banco de dados público "},
{s:"Direito Constitucional", f:"Remédios constitucionais II", b:"Mandado de Injunção → usado quando falta norma regulamentadora que inviabiliza um direito constitucional\nAção Popular → permite ao cidadão anular atos lesivos ao patrimônio público,moralidade administrativa ou meio-hambiente"},
{s:"Direito Constitucional", f:"Rol do art. 5º", b:"O rol do artigo 5º é exemplificativo e não taxativo"},
{s:"Direito Constitucional", f:"Rol taxativo x exemplificativo", b:"Rol taxativo → lista completa e definitiva (só aquelas hipóteses)\nRol exemplificativo → lista aberta, apenas exemplos"},
{s:"Direito Penal", f:"Ação subsidiária da pública", b:"É admitida a açao penal subsidiária da pública quando a incercia do ministério(não oferece a denúncia no prazo legal)"},
{s:"Direito Penal", f:"Acordo de não persecução penal", b:"Requisitos:\nCrime sem violência ou grave ameaça\nPena mínima inferior a 4 anos\nConfissão do crime pelo investigado\nAusência de reincidência em crime doloso\nNão ser caso de violência doméstica ou familiar"},
{s:"Direito Penal", f:"Concurso de pessoas", b:"Todos os que concorrem para o mesmo crime respondem pelo mesmo crime,à medida de sua culpabilidade"},
{s:"Direito Penal", f:"Crimes impossíveis", b:"Ineficácia absoluta do meio → o meio utilizado nunca funciona\nImpropriedade absoluta do objeto → o alvo torna o crime impossível"},
{s:"Direito Penal", f:"Erro de tipo x erro de proibição", b:"\"Achar que pode\" → erro de proibição\n\"Achar que está acontecendo\" (o que não está) → erro de tipo"},
{s:"Direito Penal", f:"Excludentes de ilicitude ", b:"Legítima defesa\nEstado de necessidade\nEstrito cumprimento do dever legal\nExercício regular do direito"},
{s:"Direito Penal", f:"Extraterritorialidade da lei penal", b:"Incondicionada → lei brasileira aplicada sem exigir condições\nCondicionada → aplicada se existirem as condições necessárias\nHipercondicionada → estrangeiro pratica crime contra brasileiro fora do país"},
{s:"Direito Penal", f:"Extraterritorialidade -incodicionada", b:"Casos de extraterritorialidade incondicionada:\n\nCrimes contra a vida ou liberdade do Presidente da República\nCrimes contra a vida ou liberdade do Presidente da República, Vice-Presidente e Ministros de Estado\nCrimes contra a vida ou liberdade de diplomatas e agentes estrangeiros"},
{s:"Direito Penal", f:"Extraterritorielidade -condicionada", b:"Casos de extraterritorialidade condicionada:\n\nCrimes que por tratado "},
{s:"Direito Penal", f:"Fases do crime (iter criminis)", b:"Cogitação → Preparação → Execução → Consumação / Exaurimento"},
{s:"Direito Penal", f:"Retroatividade x ultratividade", b:"Retroatividade → aplicação de lei nova mais benéfica a fatos ocorridos antes da sua vigência\nUltratividade → aplicação de lei antiga (já revogada) a fatos ocorridos antes da nova lei"},
{s:"Direito Penal", f:"Tempo e lugar do crime", b:"Tempo do crime → teoria da atividade (momento da ação/omissão)\nLugar do crime → teoria da ubiquidade (lugar da ação ou do resultado)"},
{s:"Direito Penal", f:"Teoria do crime — excludentes", b:"Ilicitude → o fato é típico, mas não ilícito\nCulpabilidade → o fato é típico e ilícito, mas o agente não pode ser punido\nPunibilidade → o fato é típico, ilícito e o agente é culpável, mas não pode punir"},
{s:"Direito Penal Militar", f:"Competência conforme o tipo de militar", b:"Militar estadual → Justiça Militar Estadual\nMilitar federal → Justiça Militar da União\nCrime doloso contra a vida → Tribunal do Júri"},
{s:"Direito Penal Militar", f:"CPM — extraterritorialidade", b:"No Código Penal Militar existe apenas a extraterritorialidade incondicionada"},
{s:"Direito Penal Militar", f:"Crime propriamente x impropriamente militar", b:"Propriamente militar → só pode ser cometido por militar, previsto exclusivamente no CPM\nImpropriamente militar → pode ser cometido por civil ou militar, previsto no CPM e no CP"},
{s:"Direito Penal Militar", f:"crimes contra a administração militar", b:"Desacato a superior \nDesacato a militar\nDesacato a servidor público\nDesobediência\nIgresso clandestino"},
{s:"Direito Penal Militar", f:"Crimes contra a administração militar", b:"Peculato → desvia bem público\nCorrupção ativa → oferece vantagem indevida\nConcussão → exige vantagem indevida\nPrevaricação → retarda ou deixa de praticar ato de ofício\nCorrupção passiva → recebe ou solicitar vantagem indevida"},
{s:"Direito Penal Militar", f:"Medidas de segurança ",b:"Pessoais:\nDententivas → Internação em estabelecimento de custódia e tratamento ou seção especial da legilção penal\nNão dententivas → Tratemento ambulatório, a interdição de licença para direção de veículos motorizados,o exílio local e a proibição de frequentar determinados lugares\n\nPatrimoniais:\nCompreende a interdição de bens ou sede de sociedade ou associação e o cofisco"},
{s:"Direito Penal Militar", f:"Motin x Revolta",b:"Motim → sem armas \n Revolta → com armas "},
{s:"Direito Penal Militar", f:"Justiça militar estadual — competência", b:"A Justiça Militar Estadual não julga civis"},
{s:"Direito Processual Penal", f:"Ação penal: requisição x requerimento", b:"Requisição → feita por autoridade competente\nRequerimento → pedido feito pelo ofendido"},
{s:"Direito Processual Penal", f:"Denúncia sem inquérito", b:"A denúncia pode ser oferecida sem o inquérito concluído, ou até mesmo sem inquérito\nCondição: indícios de autoria e prova da materialidade"},
{s:"Direito Processual Penal", f:"Perempção na ação penal", b:"Não ocorre perempção na ação penal subsidiária da pública, pois o Ministério Público é o titular da ação penal"},
{s:"Direito Processual Penal", f:"Prisão temporária — prazos", b:"Crimes comuns → 5 dias, prorrogável por igual período em caso de extrema necessidade\nCrimes hediondos e equiparados → 30 dias, também prorrogável"},
{s:"Direito Processual Penal", f:"Representação da vítima", b:"A representação é a autorização da vítima para que o Estado prossiga com o processo do crime\nAntes de oferecer a denúncia → a vítima pode se retratar\nDepois de oferecida → não pode mais se retratar"},
{s:"Direito Processual Penal Militar", f:"Processo Penal Militar — fiança", b:"O CPPM não admite fiança"},
{s:"Direito Processual Penal Militar", f:"Inquerito — prazos de denúncia e inquérito", b:"Denúncia → réu preso: 5 dias / solto: 15 dias\nInquérito → réu preso: 20 dias / solto: 40 dias (prorrogável)"},
{s:"Direito Procesual Penal MIlitar",  f:"Menagem", b:" A menagem poderá ser concedida pelo juiz, nos crimes cujo máximo da pena privativa da liberdade não exceda a quatro anos, tendo-se, porém, em atenção a natureza do crime e os antecedentes do acusado."},
{s:"Estatuto da PM", f:"Apuração de transgressões", b:"Parte disciplinar → Documento que narra transgressão de policial de posto ou graduação inferior\nComunicação disciplinar → Documento que narra transgressão de superior hierarquico" },
{s:"Estatuto da PM", f:"Classificação comportamental", b:"Excepcional\nÓtimo\nBom\nInsuficiente\nMau → quebra de expectativa"},
{s:"Estatuto da PM", f:"Conselho de justificação x disciplina", b:"Oficial → Conselho de Justificação\nPraça → Conselho de Disciplina"},
{s:"Estatuto da PM", f:"Inatividade — prazos", b:"Pensão → 35 anos, com 30 de serviço ativo\nReserva → 30 anos\nReforma → 12 anos"},
{s:"Estatuto da PM", f:"Termos de promoção", b:"Antiguidade, Merecimento, Bravura, Post Mortem"},
{s:"Informática", f:"Backup incremental x diferencial", b:"Incremental → somente os arquivos modificados desde o ÚLTIMO backup\nDiferencial → todos os arquivos alterados desde o último backup COMPLETO"},
{s:"Informática", f:"Execel -funções", b:"Procv → procura em linhas e da o resultado em colunas\nProch → procura em colunas e da o resultado em linhas"},
{s:"Informática", f:"Excel — referências de célula", b:"=A2 → referência relativa\n=$A$2 → referência absoluta\n=A$2 ou =$A2 → referência mista"},
{s:"Informática", f:"Gerações de vírus/antivírus", b:"1ª geração → detecção por assinatura\n2ª geração → detecção heurística (características suspeitas)"},
{s:"Informática", f:"Limite de caracteres em nome de arquivo", b:"Cada pasta ou arquivo pode ter até 255 caracteres no nome"},
{s:"Informática", f:"Phishing x Pharming x Vishing", b:"Phishing → e-mail ou site falso que rouba dados\nPharming → redireciona a URL para site falso mesmo digitando o endereço certo\nVishing → phishing por ligação telefônica"},
{s:"Informática", f:"Planilhas: linhas x colunas", b:"Linhas → números\nColunas → letras"},
{s:"Legislação Especial", f:"Codigo de Trânsito", b:"Rodovias → pavimentadas\nEstradas → não pavimentadas"},
{s:"Legislação Especial", f:"Codigo de Trânsito", b:"Via de trânsito rápido → sem cruzamentos, fluxo livre\nVia arterial → liga regiões da cidade\nVia local → acesso à residência"},
{s:"Legislação Especial", f:"Crimes de racismo — o que a lei abrange", b:"Raça, cor, etnia, religião, procedência nacional"},
{s:"Legislação Especial", f:"Estatuto do Desarmamento — tipos de arma", b:"Arma com defeito → não é crime, se comprovado por perícia\nArma desmuniciada → é crime\nArma desmontada → é crime"},
{s:"Legislação Especial", f:"Estatuto do Desarmamento — crimes hediondos com armas", b:"Qualquer tipo de arma(permitido,restrito e proibido) configura como crime hediondo nos casos de:\n\nRoubo\nComércio sem autorização\nTráfico internacional\nPorte ou posse(arma de uso proibido)"},
{s:"Legislação Especial", f:"Lei de Abuso de Autoridade — efeitos da condenação", b:"Obrigação de reparar o dano causado → automático\nInabilitação para o cargo → se reincidente\nPerda do cargo/mandato/função pública → se reincidente"},
{s:"Legislação Especial", f:"Organização criminosa: ação controlada x infiltração", b:"Ação penal controlada → não precisa de autorização judicial, apenas aviso prévio\nInfiltração → sempre precisa de autorização judicial"},
{s:"Legislação Especial", f:"Estatuto do Desarmamento", b:"SINARM (Polícia Federal) → controla armas de uso permitido\nSIGMA (Exército) → controla armas de uso restrito"},
{s:"Legislação Especial", f:"Estatuto do Desarmamento — crime culposo", b:"O Estatuto do Desarmamento não admite crime culposo, exceto o de omissão de cautelares (ex: não guardar arma em local seguro)"},
{s:"Legislação Especial", f:"Lei de drogas", b:"O SISNAD é totalmente contra a padronização do tratamento\nA lei exige que o projeto terapêutico seja individualizado e pautado nas necessidades de cada pessoa"},
{s:"Legislação Especial", f:"Lei de drogas - tratamento ambulatorial", b:"Tratamento onde a pessoa não precisa ficar internada: apenas vai para consulta, recebe acompanhamento e alta para casa"},
{s:"Legislação Especial", f:"Crimes equiparados a hediondos", b:"Tortura,\ntráfico de drogas,\nterrorismo"},
{s:"Legislação Especial", f:"crimes hediondos", b:"Homicídio qualificado\nFeminicídio\nLatrocínio\nExtorsão qualificada pela morte\nEstupro\nSequestro e cárcere privado\nfavorecimento da prostituição\nfurto qualificado por uso de explosivo"},
{s:"Legislação Especial", f:"Prisão temporária em hediondos", b:"30 dias, prorrogável por mais 30 dias se houver extrema necessidade"},
{s:"Legislação Especial", f:"Prisão próvisoria x prisão preventiva", b:"Prisão provisória → Tem como finalidade auxiliar o inquérito policial, e so pode acontecer durante o inquérito\nPrisão preventiva →Tem a finalidade de proteger a sociedade, e pode acontecer durante o inquérito ou durante o processo"},
{s:"Legislação Especial", f:"Rol dos crimes hediondos", b:"Os crimes hediondos têm rol taxativo (lista fechada)"},
{s:"Legislação Especial", f:"Tráfico privilegiado — requisitos", b:"Só ocorre quando o réu preenche TODOS os requisitos:\nréu primário\nbons antecedentes,\nnão se dedica a atividades criminosas,\nnão integra organização criminosa"},
{s:"Legislação Especial", f:"Codigo de Trânsito", b:"Rodovias → pavimentadas\nEstradas → não pavimentadas"},
{s:"Legislação Especial", f:"Codigo de Trânsito", b:"Via de trânsito rápido → sem cruzamentos, fluxo livre\nVia arterial → liga regiões da cidade\nVia local → acesso à residência"},
{s:"Legislação Especial", f:"Crimes de tortura", b:"Efeito automático → a condenação por crime de tortura gera a perda do cargo, função ou mandato público"},
{s:"Matemática", f:"Fórmula de Fisher",b:"1+taxa de nominal/1+inflação-1"},
{s:"Matemática", f:"Fórmula juros simples",b:"C+(C.i.t)"},
{s:"Matemática", f:"Fórmula juros compostos",b:"C.(1+i)^t"},
{s:"Português", f:"\"Por que + verbo \" x \"por + infinitivo\"", b:"A estrutura \"por que + verbo\",\" substitui por + infinitivo\" quando a ideia é de causa "},
{s:"Português", f:"\"Se\" reflexivo — teste de substituição", b:"Para saber se o \"se\" é reflexivo, tente substituir por um nome próprio\nEx: \"Ana vestiu-se rápido\" → \"Ana vestiu Lilian rápido\""},
{s:"Português", f:"Acentuação de paroxítonas", b:"Todas as paroxítonas terminadas em ditongo são acentuadas"},
{s:"Português", f:"Concordância com expressões partitivas", b:"Expressões partitivas e quantitativas permitem que o verbo concorde no singular ou no plural\nEx: \"grande número de pessoas foi/foram\""},
{s:"Português", f:"Conectivos: adversativas x concessivas", b:"Adversativas → mas, porém, contudo, todavia, no entanto(oposição de ideias)\nConcessivas → embora, ainda que, mesmo que, apesar de(quebra de expectativa)"},
{s:"Português", f:"Coesão:tipos",b:"Coesão referencial → Um termo faz referência a outro termo do texto\nCoesão sequêncial → Estabelece uma sequência lógica das ideias do texto,por meio de concectivos"},
{s:"Português", f:"Conectivos -pois ",b:"Pois entre vírgulas,depois do verbo → conclusivo\nPois antes do verbo → explicativo"},
{s:"Português", f:"Modos verbais" ,b:"Indicativo → certeza\nSubjuntivo → dúvida, hipótese, desejo\nImperativo → ordem, pedido"},
{s:"Português", f:"Palavras Atrativas — próclise",b:"Negativas\nAdvérbios\nPronomes relativos,indefinidos,demostrativos e interrogativos"},
{s:"Português", f:"Pronome possessivo — referente", b:"O referente de um pronome possessivo é a PESSOA, e não o objeto possuído"},
{s:"Português", f:"Pronome relativo \"cujo\"", b:"O pronome relativo \"cujo(a)\" tem caráter anafórico, mas sua concordância é com o termo posterior"},
{s:"Português", f:"Sujeito e preposição", b:"O sujeito nunca é iniciado por preposição"},
{s:"Português", f:"Verbo \"visar\" — três sentidos", b:"1º sentido (pretender/almejar) → exige preposição \"a\"\n2º sentido (apontar/mirar) → não exige preposição\n3º sentido (assinar) → não exige preposição"},
{s:"Português", f:"Vírgula com advérbios", b:"Advérbio de até 2 palavras → vírgula facultativa\nAdvérbio de 3 ou mais palavras → vírgula obrigatória"},
{s:"Português", f:"Termos acessórios",b:"Adjuntos adnominais → Liga-se a um substantivo,servindo para caracerizar,determinar ou especificar\nAdjunto adverbial → Liga-se a um verbo,adjetivo ou advérbio,indicando circunstância " },
{s:"Redação", f:"Conectivos — Iniciar ideia", b:"Inicialmente\nPrimeiramente\nDe início\nEm primeiro lugar"},
{s:"Redação", f:"Conectivos — Adicionar nova ideia", b:"Além disso\nAdemais\nOutrosimm\nDo mesmo modo\nDa mesma forma"},
{s:"Redação", f:"Conectivos — Concluir ideia",b:"Por fim\nEm conclusão\nPortanto\n"},
{s:"Redação", f:"Conectivos — Contunuiddade",b:"Sob esse viés\nDessa forma\nNessa lógica\nNessa perspectiva\nDiante disso"},
{s:"Redação", f:"Papeis constitucionais da pm",b:"Policiamento ostensivo\npreservação da ordem pública"},
{s:"Redação", f:"Feminicídio",b:"Criado em 2015\nPrincipal objetivo:Impedir a violência de gênero\nNão diminuiu os casos por vincular também razões sociais e estruturais\nA cada 5 horas acontece um feminicídio"},
{s:"Redação", f:"Racismo",b:"O racismo foi considerado crime em 1988 com a CF\nSó foi punido com pena após de recluão com a lei de crimes contra raça e preconceito "},
{s:"Redação", f:"Conectivos — Consequência",b:"Portanto\nLogo\nConsequentemente\nEm razão disso\nPor conseguinte"}
];


let order = DATA.map((_,i)=>i);
let idx = 0;
let flipped = false;
let currentSubject = "Todas";

const cardEl = document.getElementById('card');
const frontText = document.getElementById('frontText');
const backText = document.getElementById('backText');
const tagFront = document.getElementById('tagFront');
const tagBack = document.getElementById('tagBack');
const progress = document.getElementById('progress');
const subjectFilter = document.getElementById('subjectFilter');
const listView = document.getElementById('listView');

function subjects(){
  const set = new Set(DATA.map(d=>d.s));
  return ["Todas", ...Array.from(set).sort()];
}

function populateFilter(){
  subjectFilter.innerHTML = subjects().map(s=>`<option value="${s}">${s}</option>`).join('');
}

function filteredOrder(){
  if(currentSubject === "Todas") return DATA.map((_,i)=>i);
  return DATA.map((_,i)=>i).filter(i=>DATA[i].s === currentSubject);
}

function render(){
  if(order.length === 0){
    frontText.textContent = "Nenhum cartão nessa matéria.";
    backText.textContent = "";
    progress.textContent = "";
    return;
  }
  const item = DATA[order[idx]];
  tagFront.textContent = item.s;
  tagBack.textContent = item.s;
  frontText.textContent = item.f;
  backText.textContent = item.b;
  progress.textContent = `${idx+1} / ${order.length}`;
  cardEl.classList.toggle('flipped', flipped);
}

function flip(){
  flipped = !flipped;
  cardEl.classList.toggle('flipped', flipped);
}

function next(){
  flipped = false;
  idx = (idx+1) % order.length;
  render();
}
function prev(){
  flipped = false;
  idx = (idx-1+order.length) % order.length;
  render();
}
function shuffle(){
  for(let i=order.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [order[i],order[j]]=[order[j],order[i]];
  }
  idx = 0; flipped = false;
  render();
}

function renderList(){
  listView.innerHTML = DATA.map(d=>`
    <div class="list-item">
      <div class="li-tag">${d.s}</div>
      <b>${d.f}</b>
      <div class="li-back">${d.b}</div>
    </div>
  `).join('');
}

cardEl.addEventListener('click', flip);
document.getElementById('flipBtn').addEventListener('click', flip);
document.getElementById('nextBtn').addEventListener('click', next);
document.getElementById('prevBtn').addEventListener('click', prev);
document.getElementById('shuffleBtn').addEventListener('click', shuffle);
document.getElementById('subjectFilter').addEventListener('change', (e)=>{
  currentSubject = e.target.value;
  order = filteredOrder();
  idx = 0; flipped = false;
  render();
});
document.getElementById('listToggleBtn').addEventListener('click', ()=>{
  listView.classList.toggle('show');
  document.getElementById('listToggleBtn').textContent = listView.classList.contains('show') ? '📋 Fechar lista' : '📋 Ver lista completa';
});

populateFilter();
renderList();
render();