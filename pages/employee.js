/**
 * Original Author: Jack Watson
 * Created Date: 10/30/2021
 * Purpose: This file holds the signup form for an employee so they can get into our system.
 */


import Head from 'next/head'
import Column from '@templates/column'

import MultiPageForm from '@organisms/form/multi-page-form'
import FormPage from '@organisms/form/form-page'

import DependentInput from '@molecules/control/dependent-input'
import Question from '@molecules/control/question'
import Input from "@molecules/control/input"
import Select from "@molecules/control/select"
import EmployeeVerify from "@organisms/signup/employee-verify"

import * as data from "@lib/form/FormData"
import rules from '@lib/form/rules'

const validFiles = 
[
    "text/plain", //txt
    "application/pdf", //pdf
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //docx
    "application/msword" //doc
]

// import Head from 'next/head'
// import Column from '@templates/column'

// import MultiPageForm from '@organisms/form/multi-page-form'
// import FormPage from '@organisms/form/form-page'
// import SharerVerify from "@organisms/signup/affiliate-verify"

// import Input from "@molecules/control/input"
// import Select from "@molecules/control/select"
{/* <FormPage title="Let’s design your link!" buttonLabel="Create My Link!" >
<Input  label="Link Name" name="name"       type="text" validators={ [ rules.noSpaces, rules.urlTokens, rules.maxLength(50) ] } />
<Select label="Charity"   name="charity_id" endpoint="search/charities" />
<Input  label="Phone"     name="phone"      type="tel" />
</FormPage> */}

export default function EmployeePage(props)
{
    const distance = <Question question="Where do you want to work?" input={
        <Select label="Location" name="distance" list={data.distance}/>
    }/>
    const nations = <Select label="Nations" name="nations"  endpoint="search/countries" multiple />
    const place   = <Select label="Address" name="place_id" endpoint="search/places"  />

    const education = <Select label="Highest Education" name="education" list={data.education}  />
    const major   = <Select label="Major" name="major" endpoint="search/majors" multiple />

    const sharerForm =  <MultiPageForm link="signup/employees" Redirect={EmployeeVerify}>

        {/* Name */}
        <FormPage buttonLabel="Find Your Perfect Job" >
            <Input label="Legal First Name" name="fname"  validators={ [ rules.maxLength(50) ] } />
            <Input label="Legal Last Name"  name="lname"  validators={ [ rules.maxLength(50) ] } />
            <Input label="Phone" name="phone" />
            <Input label="Email" name="email" type="email" validators={ [ rules.email ] } />
            <Select label="Jobs" name="job_id" endpoint="search/jobs" multiple />
        </FormPage>


        {/* Job Specification */}
        <FormPage buttonLabel="Next" >
            <Select label="Hourly Rate" name="hourly_rate" list={data.employeeWage} />
            <Question question="Full-time or Part-time?" input={
                <Select label="Time" name="commitment" list={data.commitment}  />
            }/>
            <Question question="In-person or Remote?" input={
                <Select label="Where" name="where" list={data.where}/>
            }/>
            <Question question="What countries are you legally authorized to work in?" input={
                <Select label="Country" name="authorized" endpoint="search/countries" multiple/>
            }/>
            <DependentInput independentInput={distance} dependentInputs={[nations, place]} dependsOnValues={[2, [25, 50, 100, 250]]} />
        </FormPage>


        {/* Location */}
        <FormPage buttonLabel="Submit Your Application" >
            <DependentInput independentInput={education} dependentInputs={[major]} dependsOnValues={[[3,4,5,6]]} />
            <Select label="Experience Level" name="experience" list={data.experience} />
            <Question question="Upload your resume - Optional" input={
                <Input label="Resume" name="resume" type="file" required={false} validators={ [ rules.maxSize(5), rules.fileType(validFiles) ] } />
            }/>
            <Question question="Licenses, certifications, and other information the employer should know? - Optional" input={
                <Input label="Other Information" name="information" required={false} validators={ [ rules.maxLength(50) ] } />
            }/>
        </FormPage>

    </MultiPageForm>

    return <>
        <Head>
            <title>Apply to hundreds of jobs in one minute!</title>
        </Head>

        <Column content={sharerForm} />
    </>
}