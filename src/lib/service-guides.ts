export type ServiceGuide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  quickAnswer: string;
  symptoms: string[];
  checks: { title: string; detail: string }[];
  nextSteps: string[];
  preparation: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const serviceGuides: Record<string, ServiceGuide> = {
  'hybrid-battery-repair': {
    slug: 'hybrid-battery-repair',
    title: 'Hybrid Battery Diagnostics & Repair',
    description: 'Hybrid battery warning, reduced performance or charging concerns? Learn what is checked before repair or reconditioning is recommended.',
    intro: 'A hybrid warning does not identify one failed part by itself. The traction battery, its cooling system, the 12-volt battery, wiring and other hybrid components can produce related symptoms. The first step is to establish which system is actually reporting a fault.',
    quickAnswer: 'A “Check Hybrid System” message does not automatically mean the battery pack needs replacing. Fault codes and measured system data help narrow the cause before repair options are discussed.',
    symptoms: [
      'A hybrid system or battery warning appears on the dashboard.',
      'The battery charge display moves unusually quickly or performance changes.',
      'The engine runs more often than expected or fuel use rises.',
      'A cooling fan runs loudly, or a previous battery repair has not solved the issue.',
    ],
    checks: [
      { title: 'Read the system faults', detail: 'Relevant hybrid and battery control modules are scanned. A code is treated as a starting clue, then compared with the vehicle’s symptoms and service information.' },
      { title: 'Review operating data', detail: 'Available live data can show how the battery and related systems behave. The exact readings and tests depend on the vehicle and the fault.' },
      { title: 'Check related causes', detail: 'Cooling, wiring, connectors and the 12-volt system may be considered before a battery pack is identified as the cause.' },
      { title: 'Explain the options', detail: 'Inspection findings are discussed before reconditioning, repair or another next step is proposed. A scan alone does not justify a replacement.' },
    ],
    nextSteps: [
      'A repair recommendation depends on the confirmed fault and the condition of the battery and related components.',
      'If reconditioning is suitable, the work and the follow-up checks are explained before it begins.',
      'If another system is responsible, the plan focuses on that fault instead of replacing a healthy pack.',
    ],
    preparation: [
      'Share the vehicle make, model and year, plus any dashboard warning or fault-code report.',
      'Describe when the symptom appears and whether work has already been done.',
      'Do not open or probe high-voltage components yourself; arrange an inspection when a hybrid warning persists.',
    ],
    faqs: [
      { question: 'Does a hybrid warning always mean the battery is bad?', answer: 'No. Several hybrid, cooling and electrical faults can trigger a warning. The vehicle needs a proper diagnosis before the cause can be named.' },
      { question: 'Can every hybrid battery be reconditioned?', answer: 'No. Suitability depends on the pack’s condition and the fault found during inspection. Repair, reconditioning and replacement are separate decisions.' },
      { question: 'Can you quote a repair before testing?', answer: 'A reliable repair quote depends on the fault, vehicle and work required. Share the warning and vehicle details first so the diagnostic visit can be planned.' },
    ],
    related: ['ev-diagnostics', 'gearbox-diagnostics'],
  },
  'ev-diagnostics': {
    slug: 'ev-diagnostics',
    title: 'Electric Vehicle Diagnostics',
    description: 'EV charging, battery, drive or cooling fault? Understand the diagnostic checks used to isolate the affected system before repair.',
    intro: 'An electric vehicle can show similar warnings for different problems. Charging equipment, the 12-volt system, the high-voltage battery, inverter, DC-DC converter, wiring and thermal controls each need a different diagnostic path. The goal is to identify the affected system before parts or repairs are proposed.',
    quickAnswer: 'An EV that will not charge is not automatically suffering a traction-battery failure. The charging connection, external equipment, 12-volt supply and vehicle-side charging system may all need to be considered.',
    symptoms: [
      'The vehicle will not charge or stops charging unexpectedly.',
      'A battery, drive-system or power warning appears.',
      'Range, acceleration or vehicle readiness changes unexpectedly.',
      'Cooling or thermal warnings accompany an electrical fault.',
    ],
    checks: [
      { title: 'Record the conditions', detail: 'The vehicle model, warning, charging setup and timing of the fault are collected first. An intermittent problem may require different checks from a constant warning.' },
      { title: 'Scan the relevant systems', detail: 'Available fault codes and live data are reviewed across the modules involved. The code is interpreted with the symptoms rather than treated as a replacement instruction.' },
      { title: 'Separate likely causes', detail: 'The 12-volt supply, charging path, wiring, battery-related systems, drive components or cooling system are checked as the evidence requires.' },
      { title: 'Agree on the next step', detail: 'Findings and possible repair work are explained before further work. Tool access and procedures vary by model, so vehicle details are checked during intake.' },
    ],
    nextSteps: [
      'The outcome may be a repair plan, a further targeted test, or advice about a component outside the initial fault area.',
      'A charger-side issue and a vehicle-side issue call for different next steps; diagnosis should establish which one is supported by the evidence.',
      'High-voltage work is assessed using vehicle-specific procedures and is never treated as a general owner check.',
    ],
    preparation: [
      'Provide the make, model and year, exact warning text, and any fault-code report.',
      'For a charging problem, note whether it happens with one charger or more than one.',
      'Do not handle exposed high-voltage wiring or battery components; contact a qualified technician.',
    ],
    faqs: [
      { question: 'Does a battery warning mean the main EV battery must be replaced?', answer: 'No. The warning is a reason to investigate. The traction battery, 12-volt system, charger, wiring and other controls can create different battery-related symptoms.' },
      { question: 'What if the car charges at one station but not another?', answer: 'That difference is useful diagnostic information. Record the equipment used, any error message and whether the issue repeats before booking.' },
      { question: 'Can a scan alone confirm the repair?', answer: 'Usually a scan identifies a direction for testing. The fault needs to be matched to live data, the symptom and any required follow-up checks.' },
    ],
    related: ['hybrid-battery-repair', 'car-ac-diagnostics'],
  },
  'gearbox-diagnostics': {
    slug: 'gearbox-diagnostics',
    title: 'Gearbox Diagnostics & Repair',
    description: 'Gear shifting, selector or transmission warning? Learn how gearbox faults are checked before an electrical or mechanical repair is proposed.',
    intro: 'A delayed, rough or missing gear change can have several causes. Electronic controls, selector inputs, wiring and mechanical parts may create similar symptoms. A diagnostic visit is designed to find the evidence behind the fault before deciding what work is appropriate.',
    quickAnswer: 'A gearbox fault code does not automatically mean the transmission needs rebuilding. It identifies a system to investigate; operating data and further checks are needed to understand the actual cause.',
    symptoms: [
      'A gear or transmission warning light is on.',
      'The vehicle shifts harshly, hesitates or engages a gear late.',
      'The selector display or chosen gear does not match the vehicle’s behaviour.',
      'The vehicle stays in one gear or changes its driving behaviour unexpectedly.',
    ],
    checks: [
      { title: 'Document the symptom', detail: 'The exact vehicle, transmission type and conditions of the problem are noted. Manual, automated, CVT and conventional automatic systems do not share one diagnostic procedure.' },
      { title: 'Read fault and operating data', detail: 'Relevant control modules are scanned and available live data is compared with what the vehicle is doing. A stored code may need confirmation before it can be linked to the complaint.' },
      { title: 'Inspect the control path', detail: 'Selector inputs, communication and transmission wiring are considered when the evidence points to an electrical or control fault.' },
      { title: 'Assess the repair scope', detail: 'Results are explained before repair. If signs point to an internal mechanical fault, the required work is assessed separately rather than assumed from a warning light.' },
    ],
    nextSteps: [
      'Control or wiring faults may call for targeted electrical repair once they are confirmed.',
      'A mechanical finding needs its own repair assessment and clear agreement on the work involved.',
      'The supported tests and repair options depend on the vehicle and transmission system, so compatibility is checked first.',
    ],
    preparation: [
      'Send the make, model, year and transmission type if known.',
      'Describe when the shifting problem happens and share any warning or scan report.',
      'If the vehicle cannot select a gear safely, discuss transport rather than continuing to drive it.',
    ],
    faqs: [
      { question: 'Does a jerky shift always mean the gearbox is damaged?', answer: 'No. Shifting concerns can involve controls, wiring or mechanical components. Diagnosis helps separate those possibilities.' },
      { question: 'Is fault-code reading enough to choose a repair?', answer: 'No. Codes need to be checked against the symptom and available operating data. Additional electrical or mechanical checks may be needed.' },
      { question: 'Do you work on every transmission type?', answer: 'Transmission systems differ. Share the vehicle and gearbox details before booking so the relevant diagnostic access and repair scope can be confirmed.' },
    ],
    related: ['car-ac-diagnostics', 'ev-diagnostics'],
  },
  'car-ac-diagnostics': {
    slug: 'car-ac-diagnostics',
    title: 'Car AC Diagnostics & Repair',
    description: 'Car AC blowing warm air, cooling poorly or losing performance? See how leaks, airflow, compressor and electrical faults are investigated.',
    intro: 'Weak cooling can come from more than low refrigerant. Airflow, fans, electrical controls, a compressor problem or a leak may all affect cabin temperature. The most useful repair begins with the conditions in which cooling fails and a check of the relevant systems.',
    quickAnswer: 'A car AC system that blows warm air does not always need a gas refill. A refill without investigating a leak or an electrical fault may leave the underlying problem unresolved.',
    symptoms: [
      'Air from the vents stays warm or takes too long to cool.',
      'Cooling is good while driving but weakens when the vehicle stops.',
      'The AC works intermittently or stops after a recent refill.',
      'Cabin airflow is weak, or the climate system shows a warning.',
    ],
    checks: [
      { title: 'Describe the cooling problem', detail: 'The vehicle, outside conditions, vent behaviour and timing of the symptom help decide where to inspect first.' },
      { title: 'Check airflow and controls', detail: 'Cabin airflow, fans and electrical controls are reviewed because cooling performance depends on more than refrigerant alone.' },
      { title: 'Investigate the AC circuit', detail: 'Compressor operation and possible leaks are assessed as appropriate to the vehicle. The actual cause should be confirmed before a refill or part change is recommended.' },
      { title: 'Plan the repair', detail: 'The findings, proposed work and follow-up check are explained. Hybrid and EV climate systems may require different vehicle-specific procedures.' },
    ],
    nextSteps: [
      'A confirmed leak, electrical fault or compressor issue leads to a different repair plan.',
      'Any refrigerant service should follow the vehicle’s required procedure and equipment guidance.',
      'After repair, cooling performance should be checked under the conditions that caused the original complaint where practical.',
    ],
    preparation: [
      'Share the make, model and year and describe when cooling fails.',
      'Mention any recent refill, compressor work or recurring leak concern.',
      'For a hybrid or EV, identify the exact vehicle before any climate-system work is planned.',
    ],
    faqs: [
      { question: 'Does warm air mean the AC only needs gas?', answer: 'No. Airflow, fans, electrical controls, leaks and compressor operation can each affect cooling. A diagnosis identifies which issue is present.' },
      { question: 'Why does the AC cool while driving but not at idle?', answer: 'The change in conditions can point toward airflow, fan, control or refrigerant-related issues. The vehicle needs an inspection to identify the cause.' },
      { question: 'Is hybrid or EV AC serviced the same way?', answer: 'Not always. The compressor and related procedures vary by vehicle, so the exact model and manufacturer guidance matter before service.' },
    ],
    related: ['ev-diagnostics', 'gearbox-diagnostics'],
  },
};

export const serviceGuideSlugs = Object.keys(serviceGuides);
