const austin_smith = new URL('../assets/case-studies/husky-fitness/austin-smith.jpg', import.meta.url).href;
const genesis_swift = new URL('../assets/case-studies/husky-fitness/genesis-swift.jpg', import.meta.url).href;
const sebastian_gomez = new URL('../assets/case-studies/husky-fitness/sebastian-gomez.jpg', import.meta.url).href;

const hf_intro_img = new URL('../assets/case-studies/husky-fitness/hf-intro-img.png', import.meta.url).href;
const hf_bent_over_rows = new URL('../assets/case-studies/husky-fitness/hf-bent-over-rows.jpg', import.meta.url).href;
const hf_log_in = new URL('../assets/case-studies/husky-fitness/hf-log-in.jpg', import.meta.url).href;
const hf_messaging = new URL('../assets/case-studies/husky-fitness/hf-messaging.jpg', import.meta.url).href;
const hf_schedule = new URL('../assets/case-studies/husky-fitness/hf-schedule.jpg', import.meta.url).href;
const hf_todays_workouts = new URL('../assets/case-studies/husky-fitness/hf-todays-workouts.jpg', import.meta.url).href;
const hf_vision_board = new URL('../assets/case-studies/husky-fitness/hf-vision-board.jpg', import.meta.url).href;
const husky_fitness_mockup = new URL('../assets/case-studies/husky-fitness/husky-fitness-mockup.jpg', import.meta.url).href;
const husky_fitness_homepage = new URL('../assets/case-studies/husky-fitness/husky-fitness-homepage.png', import.meta.url).href;

const hf_components_1 = new URL('../assets/case-studies/husky-fitness/hf-components-1.jpg', import.meta.url).href;
const hf_components_2 = new URL('../assets/case-studies/husky-fitness/hf-components-2.jpg', import.meta.url).href;

const hf_purple_pa= new URL('../assets/case-studies/husky-fitness/hf-purple-pa.png', import.meta.url).href;
const hf_light_purple_pa= new URL('../assets/case-studies/husky-fitness/hf-light-purple-pa.png', import.meta.url).href;

const lofi_imgs = Array.from({ length: 7 }, (_, i) =>
  new URL(`../assets/case-studies/husky-fitness/lofi-wf-img-${i + 1}.jpg`, import.meta.url).href
);

const hifi_imgs = Array.from({ length: 12 }, (_, i) =>
  new URL(`../assets/case-studies/husky-fitness/hf-hifi-wf-${i + 1}.jpg`, import.meta.url).href
);

export default {
  austin_smith,
  genesis_swift,
  sebastian_gomez,
  hf_intro_img,
  hf_bent_over_rows,
  hf_log_in,
  hf_messaging,
  hf_schedule,
  hf_todays_workouts,
  hf_vision_board,
  husky_fitness_mockup,
  husky_fitness_homepage,
  hf_components_1,
  hf_components_2,
  lofi_imgs,
  hifi_imgs,
  hf_purple_pa,
  hf_light_purple_pa
};