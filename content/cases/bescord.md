---
title: "BeScord - Avanceret finansiel analyse"
aliases: [/bescord/]
---
 
 {{< testimonial "#C19F95" "bescord-white.png" "rhs.jpg" "Rasmus Heskier Schiønning" "https://www.linkedin.com/in/rasmusheskier/" "CEO" "BeScord ApS" >}}
Samarbejdet med Holion har vist at de har dygtige full stack udviklere, som udviklede vores BeScord Banking applikation. Fra starten var vores ønske at finde en dansk udviklingspartner, som har været en fordel igennem hele forløbet. Vi står med en applikation som er udviklet uden misforståelser og tidsforsinkelser. 
{{< /testimonial >}}

Projektet
---
Holion har i samarbejde med BeScord udviklet et meget avanceret system til finansiel analyse af regnskaber. Systemet kan tale direkte sammen med nogle af Danmarks største virksomheders ERP-systemer, hvorfra der hentes data ud i skyen. Når data er kommet ud i skyen, bliver disse transformeret, således at det er muligt at sammenligne disse på tværs af ERP-systemer, banker osv., så disse kan analyseres. Der bliver herefter genereret rapporter på baggrund af analyserne. Der genereres eksempelvis rapporter der fortæller, hvis bankerne har faktureret virksomhederne forkert - hvilket sker i stor stil! BeScord fandt ved hjælp af systemet overfakturering for mere end 900.000 kr. hos en meget uheldig kunde.

Holions rolle
---
BeScord har nogle af markedest dygtigste finansielle eksperter til rådighed og har derfor via timelange forklaringer og komplicerede Excel-ark kunnet forklare udviklerne hos Holion, hvad der skulle udvikles. Det har ikke været nogen let opgave, hverken for BeScord eller Holion. Men trods kompleksiteten er det lykkedes Holions dygtige udviklere at udvikle et system, som ikke bare regner rigtigt, men også håndterer de til tider kæmpe store datamængder uden problemer.

Holions folk har udover at udvikle systemet også stået for test, monitorering og vedligeholdelse. Med et system så stort og komplekst er det vigtigt, at der konstant holdes øje med evt. fejl både i selve systemet men også i forbindelse med hentning af data fra BeScords kunder. Men ved hjælp af indarbejdede rutiner og automatiserede processer, har der ikke været væsentlige nedbrud i systemet.

Teknikken
---
Micro services er grundelementet i et moderne system af denne størrelse. Da systemet kører i Azure er teknologien bag disse services Service Fabric, hvilket giver nogle rigtig gode muligheder for at skalere både de enkelte maskiner men også antallet af maskiner i clusteret, efterhånden som behovet ændrer sig i takt med antallet af kunder hos BeScord. Koden er skrevet delvist i C#, delvist i F# og med nyeste version af .NET Core.

Hos BeScords kunder skal der blot installeres en lille "connector", som på elegant vis kan hentes ned via Docker. BeScord tilbyder connectors til en lang række af de mest populære ERP-systemer, blandt andet SAP, Dynamics AX og Dynamics NAV.

Frontenden til systemet består af et avanceret websystem, som er udviklet i Angular. Når der via tofaktorlogin er adgang til systemet, kan der ses et væld af tabeller og grafer, som alle giver et indblik i virksomhedens økonomiske situation - både den aktuelle og bagudrettet.