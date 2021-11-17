
// import Head from 'next/head'
// import Column from '@templates/column'
// import MultiPageForm from '@organisms/multi-page-form'
// import FormPage from '@organisms/form-page'
// import Question from '@molecules/question'
// import Input from "@atoms/input/input"
// import SelectInput from '@atoms/select'
// import FileInput from '@atoms/input/file-input'

// import * as data from "@lib/form/FormData"
// import rules from '@lib/form/rules'
// import DependentInput from '@molecules/dependent-input'

const validFiles = 
[
    "text/plain", //txt
    "application/pdf", //pdf
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //docx
    "application/msword" //doc
]

// export default function EmployeePage(props)
// {

//     const major   = <SelectInput label="Major"   multi_select={true}  name="major"    endpoint="search/majors"  />
//     const nations = <SelectInput label="Nations" multi_select={true}  name="nations"  endpoint="search/countries"  />
//     const place   = <SelectInput label="Address" multi_select={false} name="place_id" endpoint="search/places"  />


//     const sharerForm =  <MultiPageForm link="signup/employees" redirect="employee/verify">

//         {/* Name */}
//         <FormPage buttonLabel="Find Your Perfect Job" inputBatch={ ["fname", "lname", "email", "phone", "job_id"] } >
//             <Input label="Legal First Name" name="fname"  validators={ [ rules.maxLength(50) ] } />
//             <Input label="Legal Last Name"  name="lname"  validators={ [ rules.maxLength(50) ] } />
//             <Input label="Phone" name="phone" />
//             <Input label="Email" name="email" validators={ [ rules.email, rules.uniqueEmployeeEmail ] } />
//             <SelectInput label="Jobs" multi_select={true} name="job_id" endpoint="search/jobs"      />
//         </FormPage>


//         {/* Job Specification */}
//         <FormPage buttonLabel="Next" inputBatch={ ["hourly_rate", "commitment", "where", "authorized", "distance", "place_id", "nations"] } >
//             <SelectInput label="Hourly Rate"  multi_select={false} name="hourly_rate" list={data.employeeWage}    />
//             <Question question="Full-time or Part-time?" input={
//                 <SelectInput label="Time"   multi_select={false} name="commitment" list={data.commitment}  />
//             }/>
//             <Question question="In-person or Remote?" input={
//                 <SelectInput label="Where" multi_select={false} name="where" list={data.where}  />
//             }/>
//             <Question question="What countries are you legally authorized to work in?" input={
//                 <SelectInput label="Country" multi_select={true}  name="authorized" endpoint="search/countries"  />
//             }/>
//             <Question question="Where do you want to work?" input={
//                 <SelectInput label="Location" multi_select={false} name="distance" list={data.distance}  />
//             }/>

//             <DependentInput dependsOn="distance" name="nations"  dependsOnValue={2}            renders={nations} />
//             <DependentInput dependsOn="distance" name="place_id" dependsOnValue={[25, 50, 100, 250]} renders={place} />
//         </FormPage>


//         {/* Location */}
//         <FormPage buttonLabel="Submit Your Application" inputBatch={ ["education", "major", "experience"] } >
//             <SelectInput label="Highest Education" multi_select={false} name="education"  list={data.education}  />
//             <DependentInput dependsOn="education" name="major" dependsOnValue={[3,4,5,6]} renders={major} />
//             <SelectInput label="Experience Level" multi_select={false} name="experience"  list={data.experience}  />
//             <Question question="Upload your resume - Optional" input={
//                 <FileInput label="Resume" name="resume" url="signup/resumes" required={false} validators={ [ rules.maxSize(5), rules.fileType(validFiles) ] } />
//             }/>
//             <Question question="Licenses, certifications, and other information the employer should know? - Optional" input={
//                 <Input label="Other Information" name="information" required={false} validators={ [ rules.maxLength(50) ] } />
//             }/>
//         </FormPage>

//     </MultiPageForm>

//     return <>
//         <Head>
//             <title>Apply to hundreds of jobs in one minute!</title>
//         </Head>

//         <Column content={sharerForm} />
//     </>
// }