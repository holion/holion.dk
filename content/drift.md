---
title: "Hosting og drift af apps og websystemer"
pagetitle: "IT- og app-hosting | Vi varetager driften af dine app- og webløsninger"
description: "Vi hoster dine app og webløsninger og sørger for, at de altid er opdateret til nyeste versioner af browsere, Android og iOS."
---

{{< text-with-image "/img/server.jpg" "right" >}}
## Garage og olie kan ikke undværes
Én ting er at udvikle [apps]({{< ref appudvikling >}}) og [webbaserede systemer]({{< ref webudvikling >}}). Noget andet er at sørge for, at de "bor" et sted og at de bliver ved med at fungere, selvom der måske kommer nye browsere eller versioner af iOS og Android.

Hos Holion leverer vi ikke kun appen eller websystemet - vi lever også garagen og olien, så det hele bliver ved med at spille.

## Hosting
Vi har en passion for Microsofts teknologier. [Azure](https://azure.com) er dermed vores foretrukne cloud platform. Den er hurtig, stabil og billig. Desuden er det (naturligvis) her, man finder den bedste support for Microsofts egne teknologier. 

Når vi udvikler [websystemer]({{< ref appudvikling >}}), er noget af det første vi gør altid, at vi får skabt en forbindelse mellem den kode vi udvikler og et sted i Azure, så vi lynhurtigt kan få de nyeste features ud i skyen, hvor vores samarbejdspartnere kan prøve det, vi har lavet til dem. 

Selvom Azure er vores foretrukne platform, har vi også erfaring med [AWS](https://aws.com).

#### Azure og appudvikling
En app er sjældent meget værd, uden en backend. Det er her systemet holder styr på brugerne, integrerer med andre systemer og man kan administrere appen. Så selvom man måske tænker, at der kun er behov for en app til ens specifikke løsning, ender det alligevel ofte med, at der også skal udvikles en backend. Derfor er der også behov for hosting i Azure, når der udvikles apps.
{{< /text-with-image >}}

## Distribution
Apps distribueres normalt til brugerne via [App Store](https://www.apple.com/ios/app-store/) og [Google Play](https://play.google.com). Men mens der udvikles kan det være en fordel, hvis vores samarbejdspartner også kan teste appen. Til dette formål anvender vi Microsoft [App Center](https://appcenter.ms). Via App Center kan vi automatisk distribuere testversioner af apps, indsamle fejlrapporter og køre automatiske tests på forskellige fysiske telefoner.

Når en app er klar til udgivelse, kan den sendes direkte fra App Center og over i App Store og Google Play. Dermed undgår vi unødig spildtid og manuelt arbejde i forbindelse med udgivelse af nye versioner.

## Overvågning
{{< text-with-image "/img/humio.jpg" right >}}
Når man først har fået udviklet en app eller et webbaseret system, er det vigtigt løbende at holde øje med, om det fungerer som forventet. Man kan hurtigt overbevise sig selvom, at alt fungerer perfekt, for man har jo testet det. Men ofte sker der det, at der kommer almindelige brugere på systemet - og de gør ikke altid som man forventer. Desuden kan der ske fejl på servere og integrationer kan drille i forbindelse med opdateringer i begge ender. Derfor er det rigtig vigtigt, at man løbende overvåger systemet for at høje øje både med fejl men også med om brugerne overhovedet bruger de features der er udviklet til dem.

Der findes masser af systemer der kan anvendes til overvågning af andre systemer. I Holion har vi i flere år anvendt [Humio](https://humio.com) til den daglige overvågning. I Humio kan der opsættes "dashboards" med tabeller og grafer som fortæller hvordan ens system har det. Vi har så en storskærm på kontoret hvor vi løbende kan følge med i, om alt fungerer som tiltænkt. Er der noget der ikke fungerer, kan Humio sættes til automatisk at give besked om dette.
{{< /text-with-image >}}