
import Head from 'next/head'
import Column from '@templates/column'
import MultiPageForm from '@organisms/multi-page-form'
import FormPage from '@molecules/form-page'
import Question from '@molecules/question'
import Input from "@atoms/input"
import SelectInput from '@atoms/select'
import FileInput from '@atoms/file-input'

import * as data from "@lib/form/FormData"
import rules from '@lib/form/rules'
import DependentInput from '@molecules/dependent-input'

const validFiles = 
[
    "text/plain", //txt
    "application/pdf", //pdf
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //docx
    "application/msword" //doc
]

export default function EmployeePage(props)
{

    const major   = <SelectInput label="Major"   multi_select={true} name="major" endpoint="search/majors" required={true} />
    const nations = <SelectInput label="Nations" multi_select={true} name="nations"  endpoint="search/countries" required={true} />
    const place   = <Question question="What is your home address? If you are moving soon, enter your new address" input={
                        <SelectInput label="Address" multi_select={false} name="place_id" endpoint="search/places" required={true} />
                    }/>


    const sharerForm =  <MultiPageForm link="signup/employees" redirect="signup/verify">

        {/* Name */}
        <FormPage title="To start, we would love to get to know you!" buttonLabel="Find Your Perfect Job" inputBatch={ ["fname", "lname"] } >
            <Input label="Legal First Name" name="fname" required={true} validators={ [ rules.maxLength(50) ] } />
            <Input label="Legal Last Name"  name="lname" required={true} validators={ [ rules.maxLength(50) ] } />
        </FormPage>


        {/* Job Specification */}
        <FormPage title="Hi, {fname}! What job are you searching for?" buttonLabel="Next" inputBatch={ ["job_id", "hourly_rate", "commitment", "where"] } >
            <SelectInput label="Job"    multi_select={true}  name="job_id"      endpoint="search/jobs"     required={true} />
            <SelectInput label="Hourly" multi_select={false} name="hourly_rate" list={data.employeeWage}   required={true} />
            <Question question="Full-time or Part-time?" input={
                <SelectInput label="Time"   multi_select={false} name="commitment" list={data.commitment} required={true} />
            }/>
            <Question question="In-person or Remote?" input={
                <SelectInput label="Where" multi_select={false} name="where" list={data.where} required={true} />
            }/>
        </FormPage>


        {/* Location */}
        <FormPage title="Where are you searching?" buttonLabel="Next" inputBatch={ ["authorized", "distance", "place_id", "nations"] } >
            <Question question="What countries are you legally authorized to work in?" input={
                <SelectInput label="Country" multi_select={true}  name="authorized" endpoint="search/countries" required={true} />
            }/>
            <Question question="Where do you want to work?" input={
                <SelectInput label="Where" multi_select={false} name="distance" list={data.distance} required={true} />
            }/>

            <DependentInput dependsOn="distance" name="nations"  dependsOnValue={2}            renders={nations} />
            <DependentInput dependsOn="distance" name="place_id" dependsOnValue={[3, 4, 5, 6]} renders={place} />
        </FormPage>

        {/* Background */}
        <FormPage title="Almost there! Tell us about your background" buttonLabel="Next" inputBatch={ ["education", "major", "experience", "information"] } >
            <SelectInput label="Highest Education" multi_select={false} name="education" list={data.education} required={true} />
            <DependentInput dependsOn="education" name="major" dependsOnValue={[4,5,6]} renders={major} />
            <SelectInput label="Experience Level" multi_select={false} name="experience" list={data.experience} required={true} />
            <Question question="Upload your resume - Optional" input={
                <FileInput label="Resume" name="resume" url="signup/resumes" validators={ [ rules.maxSize(5), rules.fileType(validFiles) ] } />
            }/>
            <Question question="Licenses, certifications, and other information the employer should know? - Optional" input={
                <Input label="Other Information" name="information" validators={ [ rules.maxLength(50) ] } />
            }/>
        </FormPage>

        {/* Contact */}
        <FormPage title="Employers need a way to contact you" buttonLabel="Submit Your Application" inputBatch={ ["email", "phone"] } >
            <Input label = "Email" name = "email" required={true} validators={ [ rules.email, rules.uniqueEmployeeEmail ] } />
            <Input label = "Phone" name = "phone" required={true} validators={ [ rules.phone ] } />
        </FormPage>

    </MultiPageForm>

    return <>
        <Head>
            <title>Apply to hundreds of jobs in one minute!</title>
        </Head>

        <Column content={sharerForm} />
    </>
}