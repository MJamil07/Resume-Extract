const itSkills = [
      { name: "JavaScript", regex: /\b(?:JavaScript|JS)\b/gi },
      { name: "Python", regex: /\b(?:Python)\b/gi },
      { name: "Java", regex: /\b(?:Java)\b/gi },
      { name: "C#", regex: /\b(?:C#|C\s*Sharp)\b/gi },
      { name: "C++", regex: /\b(?:C\+\+)\b/gi },
      { name: "PHP", regex: /\b(?:PHP)\b/gi },
      { name: "Ruby", regex: /\b(?:Ruby)\b/gi },
      { name: "React", regex: /\b(?:React)\b/gi },
      { name: "Angular", regex: /\b(?:Angular)\b/gi },
      { name: "Vue.js", regex: /\b(?:Vue\.js|Vue)\b/gi },
      { name: "Node.js", regex: /\b(?:Node\.js|Node)\b/gi },
      { name: "Express.js", regex: /\b(?:Express\.js|Express)\b/gi },
      { name: "Django", regex: /\b(?:Django)\b/gi },
      { name: "Git", regex: /\b(?:Git)\b/gi },
      { name: "Docker", regex: /\b(?:Docker)\b/gi },
      { name: "Kubernetes", regex: /\b(?:Kubernetes|K8s)\b/gi },
      { name: "MongoDB", regex: /\b(?:MongoDB)\b/gi },
      { name: "MySQL", regex: /\b(?:MySQL)\b/gi },
      { name: "PostgreSQL", regex: /\b(?:PostgreSQL|Postgres)\b/gi },
      { name: "AWS", regex: /\b(?:AWS|Amazon\s*Web\s*Services)\b/gi },
      { name: "Azure", regex: /\b(?:Azure)\b/gi },
      { name: "Google Cloud", regex: /\b(?:Google\s*Cloud|GCP)\b/gi },
      { name: "PHP", regex: /\b(?:PHP)\b/gi },
        { name: "Ruby", regex: /\b(?:Ruby)\b/gi },
        { name: "Go", regex: /\b(?:Go|Golang)\b/gi },
        { name: "Swift", regex: /\b(?:Swift)\b/gi },
        { name: "Rust", regex: /\b(?:Rust)\b/gi },
        { name: "TensorFlow", regex: /\b(?:TensorFlow)\b/gi },
        { name: "PyTorch", regex: /\b(?:PyTorch)\b/gi },
        { name: "Jenkins", regex: /\b(?:Jenkins)\b/gi },
        { name: "Travis CI", regex: /\b(?:Travis\s*CI)\b/gi },
        { name: "SQLite", regex: /\b(?:SQLite)\b/gi },
        { name: "Oracle", regex: /\b(?:Oracle)\b/gi },
        { name: "DigitalOcean", regex: /\b(?:DigitalOcean)\b/gi },
        { name: "IBM Cloud", regex: /\b(?:IBM\s*Cloud)\b/gi },
        { name: "Blockchain", regex: /\b(?:Blockchain)\b/gi },
        { name: "Microservices", regex: /\b(?:Microservices)\b/gi },
        { name: "Laravel", regex: /\b(?:Laravel)\b/gi },
        { name: "Flask", regex: /\b(?:Flask)\b/gi },
        { name: "Redux", regex: /\b(?:Redux)\b/gi },
        { name: "Subversion (SVN)", regex: /\b(?:Subversion|SVN)\b/gi },
        { name: "Maven", regex: /\b(?:Maven)\b/gi },
        { name: "SQLite", regex: /\b(?:SQLite)\b/gi },
        { name: "Oracle", regex: /\b(?:Oracle)\b/gi },
        { name: "DigitalOcean", regex: /\b(?:DigitalOcean)\b/gi },
        { name: "IBM Cloud", regex: /\b(?:IBM\s*Cloud)\b/gi },
        { name: "Blockchain", regex: /\b(?:Blockchain)\b/gi },
        { name: "Microservices", regex: /\b(?:Microservices)\b/gi },
        { name: "Perl", regex: /\b(?:Perl)\b/gi },
        { name: "Haskell", regex: /\b(?:Haskell)\b/gi },
        { name: "Kotlin", regex: /\b(?:Kotlin)\b/gi },
        { name: "jQuery", regex: /\b(?:jQuery)\b/gi },
        { name: "Ember.js", regex: /\b(?:Ember\.js|Ember)\b/gi },
        { name: "CircleCI", regex: /\b(?:CircleCI)\b/gi },
        { name: "Ansible", regex: /\b(?:Ansible)\b/gi },
        { name: "NoSQL", regex: /\b(?:NoSQL)\b/gi },
        { name: "Microsoft SQL Server", regex: /\b(?:Microsoft\s*SQL\s*Server|SQL\s*Server)\b/gi },
        { name: "Heroku", regex: /\b(?:Heroku)\b/gi },
        { name: "Alibaba Cloud", regex: /\b(?:Alibaba\s*Cloud)\b/gi },
        { name: "Containerization", regex: /\b(?:Containerization)\b/gi },
        { name: "Serverless", regex: /\b(?:Serverless)\b/gi },
        { name: "Scala", regex: /\b(?:Scala)\b/gi },
      { name: "TypeScript", regex: /\b(?:TypeScript)\b/gi },
      { name: "Lua", regex: /\b(?:Lua)\b/gi },
      { name: "Flask", regex: /\b(?:Flask)\b/gi },
      { name: "Spring Boot", regex: /\b(?:Spring\s*Boot)\b/gi },
      { name: "Puppet", regex: /\b(?:Puppet)\b/gi },
      { name: "Terraform", regex: /\b(?:Terraform)\b/gi },
      { name: "Elasticsearch", regex: /\b(?:Elasticsearch)\b/gi },
      { name: "Cassandra", regex: /\b(?:Cassandra)\b/gi },
      { name: "DigitalOcean", regex: /\b(?:DigitalOcean)\b/gi },
      { name: "Red Hat OpenShift", regex: /\b(?:Red\s*Hat\s*OpenShift|OpenShift)\b/gi },
      { name: "Artificial Intelligence", regex: /\b(?:Artificial\s*Intelligence|AI)\b/gi },
      { name: "Internet of Things", regex: /\b(?:Internet\s*of\s*Things|IoT)\b/gi },
      { name: "Android Development", regex: /\b(?:Android\s*Development)\b/gi },
      { name: "iOS Development", regex: /\b(?:iOS\s*Development)\b/gi },
      { name: "React Native", regex: /\b(?:React\s*Native)\b/gi },
      { name: "Flutter", regex: /\b(?:Flutter)\b/gi },
      { name: "Swift", regex: /\b(?:Swift)\b/gi },
      { name: "Objective-C", regex: /\b(?:Objective-C)\b/gi },
      { name: "Java (Android)", regex: /\b(?:Java\s*\(Android\))\b/gi },
      { name: "Kotlin (Android)", regex: /\b(?:Kotlin\s*\(Android\))\b/gi },
      { name: "Xcode", regex: /\b(?:Xcode)\b/gi },
      { name: "Android Studio", regex: /\b(?:Android\s*Studio)\b/gi },
      { name: "SwiftUI", regex: /\b(?:SwiftUI)\b/gi },
      { name: "Core Data", regex: /\b(?:Core\s*Data)\b/gi },
      { name: "Core Animation", regex: /\b(?:Core\s*Animation)\b/gi },
      { name: "Firebase", regex: /\b(?:Firebase)\b/gi },
      { name: "RESTful API Integration", regex: /\b(?:RESTful\s*API\s*Integration)\b/gi },
      { name: "JSON Parsing", regex: /\b(?:JSON\s*Parsing)\b/gi },
      { name: "UI/UX Design", regex: /\b(?:UI\/UX\s*Design)\b/gi },
      { name: "Mobile App Testing", regex: /\b(?:Mobile\s*App\s*Testing)\b/gi },
      { name: "Responsive Design", regex: /\b(?:Responsive\s*Design)\b/gi },
      { name: "Performance Optimization", regex: /\b(?:Performance\s*Optimization)\b/gi },
      { name: "Introduction to Computer Science", regex: /\b(?:Introduction\s*to\s*Computer\s*Science)\b/gi },
    { name: "Data Structures and Algorithms", regex: /\b(?:Data\s*Structures\s*and\s*Algorithms)\b/gi },
    { name: "Object-Oriented Programming", regex: /\b(?:Object-Oriented\s*Programming)\b/gi },
    { name: "Operating Systems", regex: /\b(?:Operating\s*Systems)\b/gi },
    { name: "Database Management Systems", regex: /\b(?:Database\s*Management\s*Systems)\b/gi },
    { name: "Computer Networks", regex: /\b(?:Computer\s*Networks)\b/gi },
    { name: "Software Engineering", regex: /\b(?:Software\s*Engineering)\b/gi },
    { name: "Web Development", regex: /\b(?:Web\s*Development)\b/gi },
    { name: "Artificial Intelligence", regex: /\b(?:Artificial\s*Intelligence)\b/gi },
    { name: "Machine Learning", regex: /\b(?:Machine\s*Learning)\b/gi },
    { name: "Natural Language Processing", regex: /\b(?:Natural\s*Language\s*Processing)\b/gi },
    { name: "Computer Graphics", regex: /\b(?:Computer\s*Graphics)\b/gi },
    { name: "Cybersecurity", regex: /\b(?:Cybersecurity)\b/gi },
    { name: "Parallel and Distributed Computing", regex: /\b(?:Parallel\s*and\s*Distributed\s*Computing)\b/gi },
    { name: "Databases and SQL", regex: /\b(?:Databases\s*and\s*SQL)\b/gi },
    { name: "Programming Languages", regex: /\b(?:Programming\s*Languages)\b/gi },
    { name: "Computer Architecture", regex: /\b(?:Computer\s*Architecture)\b/gi },
    { name: "Operating System Design", regex: /\b(?:Operating\s*System\s*Design)\b/gi },
    { name: "Software Testing and Quality Assurance", regex: /\b(?:Software\s*Testing\s*and\s*Quality\s*Assurance)\b/gi },
    { name: "Human-Computer Interaction", regex: /\b(?:Human-Computer\s*Interaction)\b/gi },
    { name: "Data Mining", regex: /\b(?:Data\s*Mining)\b/gi },
    { name: "Cloud Computing", regex: /\b(?:Cloud\s*Computing)\b/gi },
    { name: "Big Data Analytics", regex: /\b(?:Big\s*Data\s*Analytics)\b/gi },
    { name: "Computer Vision", regex: /\b(?:Computer\s*Vision)\b/gi },
    { name: "Robotics", regex: /\b(?:Robotics)\b/gi },
    { name: "Information Retrieval", regex: /\b(?:Information\s*Retrieval)\b/gi },
    { name: "Cryptography", regex: /\b(?:Cryptography)\b/gi },
    { name: "Network Security", regex: /\b(?:Network\s*Security)\b/gi },
    { name: "Compiler Design", regex: /\b(?:Compiler\s*Design)\b/gi },
    { name: "Graph Theory", regex: /\b(?:Graph\s*Theory)\b/gi },
    { name: "Artificial Neural Networks", regex: /\b(?:Artificial\s*Neural\s*Networks)\b/gi },
    { name: "Quantum Computing", regex: /\b(?:Quantum\s*Computing)\b/gi },
    { name: "Mobile App Development", regex: /\b(?:Mobile\s*App\s*Development)\b/gi },
    { name: "Game Development", regex: /\b(?:Game\s*Development)\b/gi },
    { name: "Embedded Systems", regex: /\b(?:Embedded\s*Systems)\b/gi },
    { name: "Computer Ethics", regex: /\b(?:Computer\s*Ethics)\b/gi },
    { name: "Computational Biology", regex: /\b(?:Computational\s*Biology)\b/gi },
    { name: "System Design", regex: /\b(?:System\s*Design)\b/gi },
    { name: "Microservices Architecture", regex: /\b(?:Microservices\s*Architecture)\b/gi },
    { name: "Distributed Systems", regex: /\b(?:Distributed\s*Systems)\b/gi },
    { name: "Software Architecture", regex: /\b(?:Software\s*Architecture)\b/gi },
    { name: "Network Programming", regex: /\b(?:Network\s*Programming)\b/gi },
    { name: "Parallel Programming", regex: /\b(?:Parallel\s*Programming)\b/gi },
    { name: "Real-Time Systems", regex: /\b(?:Real-Time\s*Systems)\b/gi },
    { name: "IoT Systems", regex: /\b(?:IoT\s*Systems)\b/gi },
    { name: "Embedded Systems", regex: /\b(?:Embedded\s*Systems)\b/gi },
    { name: "Software Testing and Quality Assurance", regex: /\b(?:Software\s*Testing\s*and\s*Quality\s*Assurance)\b/gi },
    { name: "Human-Computer Interaction", regex: /\b(?:Human-Computer\s*Interaction)\b/gi },
    { name: "Data Mining", regex: /\b(?:Data\s*Mining)\b/gi },
    { name: "Cloud Computing", regex: /\b(?:Cloud\s*Computing)\b/gi },
    { name: "Big Data Analytics", regex: /\b(?:Big\s*Data\s*Analytics)\b/gi },
    { name: "Computer Vision", regex: /\b(?:Computer\s*Vision)\b/gi },
    { name: "Robotics", regex: /\b(?:Robotics)\b/gi },
    { name: "Information Retrieval", regex: /\b(?:Information\s*Retrieval)\b/gi },
    { name: "Cryptography", regex: /\b(?:Cryptography)\b/gi },
    { name: "Network Security", regex: /\b(?:Network\s*Security)\b/gi },
    { name: "Compiler Design", regex: /\b(?:Compiler\s*Design)\b/gi },
   
  
  ];


  export default  itSkills;