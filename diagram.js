graph LR
    %% Корневой узел
    IAAC["ГКУ ИАЦ в сфере здравоохранения г. Москвы"]

    %% Подразделения первого уровня (без глубокой вложенности)
    IAAC --> Apparat["Аппарат управления"]
    IAAC --> Kontrakt["Контрактная служба"]
    IAAC --> FinOtdel["Отдел сопровождения и контроля финансово-хозяйственной деятельности и расчета заработной платы"]
    IAAC --> Admhoz["Административно-хозяйственный отдел"]
    IAAC --> TehSopr["Отдел технического сопровождения"]
    IAAC --> UpravPerson["Управление по работе с персоналом"]
    IAAC --> UpravInfoOb["Управление информационного обеспечения"]
    IAAC --> Svyaz["Отдел связей с общественностью"]
    IAAC --> Mobil["Отдел мобилизационной работы"]
    IAAC --> Pravovoy["Правовой департамент"]
    IAAC --> OMS["Департамент цифровизации обязательного медицинского страхования"]

    %% Департамент ЕМИАС в амбулаторных МО
    IAAC --> DepAmbul["Департамент ЕМИАС в амбулаторных медицинских организациях"]
    subgraph DepAmbul_sub [" "]
        DepAmbul --> UpravFunkRazv["Управление функционального развития"]
        subgraph UpravFunkRazv_sub [" "]
            UpravFunkRazv --> BiznesAnaliz["Отдел бизнес анализа"]
            UpravFunkRazv --> ModelEMD["Отдел моделирования электронной медицинской документации"]
            UpravFunkRazv --> ProektUprav["Отдел проектного управления"]
            UpravFunkRazv --> ProektAdmin["Отдел проектного администрирования"]
        end

        DepAmbul --> UpravArhitekt["Управление архитектуры и технических проектов"]
        subgraph UpravArhitekt_sub [" "]
            UpravArhitekt --> SistemAnaliz["Отдел системного анализа и выработки архитектурных решений"]
            UpravArhitekt --> TehProekty["Отдел технических проектов"]
            UpravArhitekt --> BiznesArh["Отдел бизнес архитектуры и разработки функциональных требований"]
        end

        DepAmbul --> UpravInfraOb["Управление инфраструктурного обеспечения"]
        subgraph UpravInfraOb_sub [" "]
            UpravInfraOb --> SistemAdmin["Отдел системного администрирования"]
            UpravInfraOb --> Koord["Отдел координации"]
            UpravInfraOb --> PodderInfra["Отдел поддержки инфраструктуры"]
            UpravInfraOb --> SoprSKUU["Отдел сопровождения СКУУ и систем терминального доступа"]
            UpravInfraOb --> OrgTehPodderzh["Отдел организации и контроля технической поддержки"]
        end

        DepAmbul --> UpravExpluat["Управление эксплуатации"]
        subgraph UpravExpluat_sub [" "]
            UpravExpluat --> ExplBD["Отдел эксплуатации баз данных"]
            UpravExpluat --> ObespechNadezh["Отдел обеспечения надежности"]
            UpravExpluat --> SistemMonitor["Отдел систем мониторинга"]
            UpravExpluat --> TehnolProekty["Отдел технологических проектов"]
            UpravExpluat --> KonechUstr["Отдел конечных устройств"]
        end

        DepAmbul --> UpravRazrabAvtomat["Управление разработки и автоматизации"]
        subgraph UpravRazrabAvtomat_sub [" "]
            UpravRazrabAvtomat --> KontrProcesov["Отдел развития и сопровождения ИТ процессов"]
            UpravRazrabAvtomat --> RazrabIssled["Отдел разработки и исследований"]
        end

        DepAmbul --> UpravInfoBez["Управление информационной безопасности"]

        DepAmbul --> UpravKoordVnedr["Управление координации внедрения сервисов"]
        subgraph UpravKoordVnedr_sub [" "]
            UpravKoordVnedr --> KoordVnedr["Отдел координации внедрения"]
            UpravKoordVnedr --> RazvObrInfra["Отдел развития образовательной инфраструктуры"]
            UpravKoordVnedr --> SoprPolz["Отдел сопровождения пользователей"]
            UpravKoordVnedr --> SoprPilot["Отдел сопровождения пилотных площадок"]
        end

        DepAmbul --> UpravTehOb["Управление технического обеспечения"]
        DepAmbul --> UpravSoprKontraktov["Управление сопровождения контрактов"]
        subgraph UpravSoprKontraktov_sub [" "]
            UpravSoprKontraktov --> AdminKontrRazv["Отдел администрирования контрактов развития"]
            UpravSoprKontraktov --> AdminKontrTehPodderzh["Отдел администрирования контрактов технической поддержки"]
        end

        DepAmbul --> UpravObProcTehDoc["Управление обеспечения процессов и технической документации"]
        DepAmbul --> UpravAnalizaDannyh["Управление анализа данных"]
        subgraph UpravAnalizaDannyh_sub [" "]
            UpravAnalizaDannyh --> ProektAnalitOth["Отдел проектирования аналитической отчетности"]
            UpravAnalizaDannyh --> RazrabInzhResh["Отдел разработки инженерных решений"]
            UpravAnalizaDannyh --> AdminAnalitProekt["Отдел администрирования аналитических проектов"]
            UpravAnalizaDannyh --> RazrabAnalitOth["Отдел разработки аналитической отчетности"]
        end
    end

    %% Департамент ЕМИАС в стационарных МО
    IAAC --> DepStats["Департамент ЕМИАС в стационарных медицинских организациях"]
    subgraph DepStats_sub [" "]
        DepStats --> UpravRazvPO["Управление по развитию программного обеспечения"]
        subgraph UpravRazvPO_sub [" "]
            UpravRazvPO --> BiznesAnalizProekt["Отдел бизнес анализа проектной деятельности"]
            UpravRazvPO --> ProektRazvitie["Отдел проектного развития"]
            UpravRazvPO --> ArhSistemAnaliz["Отдел архитектуры и системного анализа"]
        end

        DepStats --> UpravRazvInfra["Управление по развитию инфраструктуры"]
        subgraph UpravRazvInfra_sub [" "]
            UpravRazvInfra --> VnedrIKInfra["Отдел внедрения информационно-коммуникационной инфраструктуры"]
            UpravRazvInfra --> ExplSoprInfraProekt["Отдел эксплуатации и сопровождения инфраструктурных проектов"]
        end

        DepStats --> UpravSistemArh["Управление системной архитектуры"]
        subgraph UpravSistemArh_sub [" "]
            UpravSistemArh --> SetevyeResheniya["Отдел сетевых решений"]
            UpravSistemArh --> IntegrResheniya["Отдел интеграционных решений"]
            UpravSistemArh --> BazovInfraServisy["Отдел базовых инфраструктурных сервисов"]
            UpravSistemArh --> ApparatResheniya["Отдел аппаратных решений"]
        end

        DepStats --> UpravSoprAdminProekt["Управление сопровождения и администрирования проектов"]
        subgraph UpravSoprAdminProekt_sub [" "]
            UpravSoprAdminProekt --> AdminProektov["Отдел администрирования проектов"]
            UpravSoprAdminProekt --> UpravProektVnedr["Отдел управления проектами внедрения"]
            UpravSoprAdminProekt --> UpravInfraProekt["Отдел управления инфраструктурными проектами"]
        end

        DepStats --> UpravExplSopr["Управление эксплуатации и сопровождения"]
        subgraph UpravExplSopr_sub [" "]
            UpravExplSopr --> KoordVnedrSoprPO["Отдел координации внедрения и сопровождения программного обеспечения"]
            UpravExplSopr --> InfoBez["Отдел информационной безопасности"]
            UpravExplSopr --> TehPodderzhPolz["Отдел технической поддержки пользователей"]
            UpravExplSopr --> UpravDannymiPodderzhVnedrPO["Отдел управления данными и поддержки внедрения программного обеспечения"]
        end
    end

    %% Управление общей координации
    IAAC --> UpravObshKoord["Управление общей координации деятельности по внедрению информационных технологий в здравоохранении"]
    subgraph UpravObshKoord_sub [" "]
        UpravObshKoord --> OrgKontrObrSvyaz["Отдел организации и контроля обратной связи"]
        UpravObshKoord --> OrgRabotaDocs["Отдел организации работы с документами"]
    end

    %% Департамент организационного и финансового обеспечения
    IAAC --> DepOrgFinOb["Департамент организационного и финансового обеспечения"]
    subgraph DepOrgFinOb_sub [" "]
        DepOrgFinOb --> UpravFinPlan["Управление финансового планирования"]
        subgraph UpravFinPlan_sub [" "]
            UpravFinPlan --> AnalizFinPokaz["Отдел анализа финансовых показателей"]
        end
        DepOrgFinOb --> UpravOrgRazv["Управление организационного развития"]
    end

    %% Департамент разработки и сопровождения цифровых решений
    IAAC --> DepRazrabSoprTsifr["Департамент разработки и сопровождения цифровых решений"]
    subgraph DepRazrabSoprTsifr_sub [" "]
        DepRazrabSoprTsifr --> UpravAnalizRazrabPO["Управление анализа и разработки программного обеспечения"]
        subgraph UpravAnalizRazrabPO_sub [" "]
            UpravAnalizRazrabPO --> RazrabPolzInterf["Отдел разработки пользовательских интерфейсов"]
            UpravAnalizRazrabPO --> RazrabServisyBD["Отдел разработки сервисов и баз данных"]
            UpravAnalizRazrabPO --> TestirovaniePO["Отдел тестирования программных продуктов"]
            UpravAnalizRazrabPO --> TehPodderzhTsifrResh["Отдел технической поддержки цифровых решений"]
            UpravAnalizRazrabPO --> AnalitOtdel["Аналитический отдел"]
        end
        DepRazrabSoprTsifr --> UpravInformatTsifrResh["Управление информатизации цифровых решений"]
        subgraph UpravInformatTsifrResh_sub [" "]
            UpravInformatTsifrResh --> ProizvOtdel["Производственный отдел"]
        end
    end

    %% Департамент разработки и эксплуатации информационных систем
    IAAC --> DepRazrabExplIS["Департамент разработки и эксплуатации информационных систем"]
    subgraph DepRazrabExplIS_sub [" "]
        DepRazrabExplIS --> UpravTehnolRazv["Управление технологического развития"]
        subgraph UpravTehnolRazv_sub [" "]
            UpravTehnolRazv --> ProektPolzInterf["Отдел проектирования пользовательских интерфейсов"]
            UpravTehnolRazv --> AnalizArh["Отдел анализа и архитектуры"]
            UpravTehnolRazv --> ProektServisy["Отдел проектных сервисов"]
            UpravTehnolRazv --> RazrabTehDoc["Отдел разработки технической документации"]
        end
        DepRazrabExplIS --> UpravRazrabTestPO["Управление разработки и тестирования программного обеспечения"]
        subgraph UpravRazrabTestPO_sub [" "]
            UpravRazrabTestPO --> RazrabMobilPril["Отдел разработки мобильных приложений"]
            UpravRazrabTestPO --> RazrabPO["Отдел разработки программного обеспечения"]
            UpravRazrabTestPO --> RazrabServisPOAnaliz["Отдел разработки сервисного программного обеспечения и анализа данных"]
            UpravRazrabTestPO --> TestirovaniePO2["Отдел тестирования программного обеспечения"]
        end
        DepRazrabExplIS --> UpravExplIS["Управление эксплуатации информационных систем"]
        subgraph UpravExplIS_sub [" "]
            UpravExplIS --> ExplTehPodderzh["Отдел эксплуатации и технической поддержки"]
            UpravExplIS --> IntegrAvtomatRazrabPO["Отдел интеграции и автоматизации процессов разработки программного обеспечения"]
            UpravExplIS --> AdminIS["Отдел администрирования информационных систем"]
            UpravExplIS --> InnovModernRazrabPO["Отдел инноваций и модернизации процессов разработки программного обеспечения"]
        end
    end

    %% Правовой департамент (внутренняя структура)
    subgraph Pravovoy_sub [" "]
        Pravovoy --> UpravPravSopr["Управление правового сопровождения проектов и корпоративного управления"]
    end

    %% Департамент цифровизации ОМС
    subgraph OMS_sub [" "]
        OMS --> UpravTehRazvOMS["Управление технологического развития"]
    end

    %% Управление по работе с персоналом
    subgraph UpravPerson_sub [" "]
        UpravPerson --> Kadry["Отдел кадров"]
        UpravPerson --> RabSPerson["Отдел по работе с персоналом"]
    end
