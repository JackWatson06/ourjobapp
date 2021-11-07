
import Head from 'next/head'
import Column from '@templates/column'
import MultiPageForm from '@organisms/multi-page-form'
import FormPage from '@molecules/form-page'
import Question from '@molecules/question'
import Input from "@atoms/input"
import SelectInput from '@atoms/select'

import * as data from "@lib/form/FormData"
import rules from '@lib/form/rules'

export default function EmployerPage(props)
{

    const candidateForm =  <MultiPageForm link="signup/employers" redirect="employer/verify">

        <FormPage title="Create your Candidate Pool! First, let’s get to know each other better" buttonLabel="Create Candidate Pool" inputBatch={ ["fname", "lname", "position"] } >
            <Input label="Legal First Name"     name="fname"     validators={ [ rules.maxLength(50) ] } />
            <Input label="Legal Last Name"      name="lname"     validators={ [ rules.maxLength(50) ] } />
            <Input label="Position at Company"  name="position"  validators={ [ rules.maxLength(50) ] } />
        </FormPage>

        <FormPage title="Hello! Tell us about your company" buttonLabel="Next" inputBatch={ ["company_name", "place_id"] } >
            <Input label="Company Name"    name="company_name"  validators={ [ rules.maxLength(50) ] } />
            <Input label="Company Website" name="website"      validators={ [ rules.maxLength(50) ] }/>
            <SelectInput label="Company Address" multi_select={false} name="place_id" endpoint="search/places"  />
        </FormPage>

        <FormPage title="Create your Candidate Pool?" buttonLabel="Next" inputBatch={ ["industry", "experience", "salary"] } >
            <SelectInput label="Job"              multi_select={true}  name="industry" endpoint="search/job-groups"  />
            <SelectInput label="Experience Level" multi_select={true}  name="experience" list={data.experience}      />
            <SelectInput label="Hourly Wage"      multi_select={false} name="salary"     list={data.employerWage}    />
        </FormPage>

        <FormPage title="Create your Candidate Pool (continued)" buttonLabel="Next" inputBatch={ ["commitment", "where", "authorized"] } >
            <Question question="Full-time or Part-time?" input={
                <SelectInput label="Time"   multi_select={false} name="commitment" list={data.commitment}  />
            }/>
            <Question question="In-person or Remote?" input={
                <SelectInput label="Where" multi_select={false} name="where" list={data.where}  />
            }/>
            <Question question="Only receive candidates authorized to work in your country?" input={
                <SelectInput label="Authorized" multi_select={false} name="authorized" list={data.bool}  />
            }/>
        </FormPage>

        <FormPage title="Finish creating your Candidate Pool" buttonLabel="Start Receiving Candiates!" inputBatch={ ["email" ] } >
            <Input label = "Email" name = "email"  validators = { [ rules.email, rules.uniqueEmployerEmail ] } />
        </FormPage>

    </MultiPageForm>

    return <>
        <Head>
            <title>Finish creating your Candidate Pool</title>
        </Head>

        <Column content={candidateForm} />
    </>
}