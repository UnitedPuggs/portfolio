<script>
  import Project from "./Project.svelte";

  //This website :)
  let project1_title = "Personal Website";
  let project1_tech = ['sveltekit', 'tailwindcss', 'supabase'];
  let project1_desc = "This project is the very website that you're browsing! Built using SveleKit, styled with TailwindCSS, and storing all my carousel images using Supabase Storage.";

  //SupportSearch
  let project2_title = "SupportSearch";
  let project2_tech = ['javascript', 'sveltekit', 'html', 'css', 'supabase'];
  let project2_desc = "Chrome extension made to assist my deparment at Clubspeed in retrieving information for customers more easily. Created an admin website to assist in some features and to host a mini API for retrieving info from the Supabase Database.";

  //CarGos
  let project3_title = "CarGos";
  let project3_tech = ['javascript', 'css', 'html', 'php', 'mysql', 'gcp', 'debian', 'apache']
  let project3_desc = "Class project focusing on fixing the shortcomings of sites such as OfferUp and Facebook Marketplace when it came to cars. Primarly handled the back-end, which included creating a listing system and real-time chatting, and management of the database.";

  //DigiDigits
  let project4_title = "DigiDigits";
  let project4_tech = ['python', 'pandas'];
  let project4_desc = "Script that utilizes API calls to generate a Google sheet filled with the market values for ALL digimon cards. The end goal is to create a more intuitive UI that allows users to track market trends in Digimon cards. Collaborated with a YouTuber which utlimately led to the development of a similar product, but for Yu-Gi-Oh cards https://www.youtube.com/watch?v=S96gnB7DIqE";

  //Finance Calculator
  let project5_title = "Finance Calculator";
  let project5_tech = ['qt creator', 'c++', 'sqlite'];
  let project5_desc = "A budget management system. Allows for users to input their expenses and have this program determine their savings and spendings. Allows for goals to be made too. Functionally, it's about 99% complete, just need some flair :)"

  //Herding Cats
  let project6_title = "Herding Cats";
  let project6_tech = ['python', 'quart', 'sveltekit', 'tailwindcss', 'debian', 'nginx', 'aws dynamodb']
  let project6_desc = "My current, and probably largest, project. A full-stack web app focusing on the gamification of the typical event planning software to assist users that have issues planning events.";
</script>

<svelte:head>
    <title>projects</title>
</svelte:head>

<body>
    <div class="grid grid-cols-2 gap-10 mt-7 max-w-4xl mx-auto text-white">
        <Project title={project1_title} image="" description={project1_desc} technologies={project1_tech} github="https://github.com/UnitedPuggs/portfolio" />
        <Project title={project2_title} image="" description={project2_desc} technologies={project2_tech} github="https://github.com/UnitedPuggs/SupportSearch" />
        <Project title={project3_title} image="" description={project3_desc} technologies={project3_tech} github="https://github.com/UnitedPuggs/CarGos" />
        <Project title={project4_title} image="https://github.com/UnitedPuggs/DigiDigits/raw/main/DigiSheet.png" description={project4_desc} technologies={project4_tech} github="https://github.com/UnitedPuggs/DigiDigits" />
        <Project title={project5_title} image="https://github.com/UnitedPuggs/FinanceCalculatorV2/raw/master/purchases.png" description={project5_desc} technologies={project5_tech} github="https://github.com/UnitedPuggs/FinanceCalculatorV2" />
        <Project title={project6_title} image="" description={project6_desc} technologies={project6_tech} github="https://github.com/UnitedPuggs/herding-cats" />
    </div>
</body>