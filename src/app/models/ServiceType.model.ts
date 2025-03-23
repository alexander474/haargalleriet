export enum ServiceType {
  Haircut = 'Klipp av Barn/Dame/Herre',
  BrowTint = 'Farging av vipper/bryn',
  Perm = 'Permanent',
  Bridal = 'Brudepynt',
  ColorAndHighlights = 'Farging og striper',
  LashExtensions = 'Vippeextension',
  EarPiercing = 'Hull i øre',
  HairTreatment = 'Kur med eller uten massage',
}

export const ServiceDescriptions: Record<ServiceType, string> = {
  [ServiceType.Haircut]:
    'Profesjonell klipp for barn, dame og herre – skreddersydd etter dine ønsker og stil.',
  [ServiceType.BrowTint]:
    'Form og farge som fremhever dine naturlige trekk. Perfekt for et våkent blikk.',
  [ServiceType.Perm]:
    'Skap varig tekstur og volum med vår skånsomme permanentbehandling.',
  [ServiceType.Bridal]:
    'Eksklusiv styling for den store dagen – vi sørger for at du stråler som brud.',
  [ServiceType.ColorAndHighlights]:
    'Friske opp eller forvandle håret ditt med farge, striper eller balayage.',
  [ServiceType.LashExtensions]:
    'Få fyldige, naturlige vipper som fremhever øynene dine uten behov for mascara.',
  [ServiceType.EarPiercing]:
    'Trygg og profesjonell hulltaking i ørene med fokus på hygiene og komfort.',
  [ServiceType.HairTreatment]:
    'Skreddersydde hårkurer – med eller uten massasje – for et sunt og glansfullt hår.',
};
