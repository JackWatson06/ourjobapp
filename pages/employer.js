/**
 * Original Author: Jack Watson
 * Created Date: 10/30/2021
 * Purpose: This file outlines the signup process for the employer to get access to our system. The employer has to answer quetsions
 * which help build out their candidate pool on our server.
 */

import Head from 'next/head'
import Column from '@templates/column'

import MultiPageForm from '@organisms/form/multi-page-form'
import FormPage from '@organisms/form/form-page'

import Question from '@molecules/control/question'
import Input from "@molecules/control/input"
import Select from "@molecules/control/select"
import EmployerVerify from "@organisms/signup/employer-verify"

import * as data from "@lib/form/FormData"
import rules from '@lib/form/rules'

export default function EmployerPage(props)
{

    const candidateForm =  <MultiPageForm link="signup/employers" Redirect={EmployerVerify}>

        <FormPage buttonLabel="Create Candidate Pool" >
            <Input label="Legal First Name"       name="fname"          validators={ [ rules.maxLength(50) ] } />
            <Input label="Legal Last Name"        name="lname"          validators={ [ rules.maxLength(50) ] } />
            <Input label="Email"                  name="email"          validators={ [ rules.email, rules.uniqueEmployerEmail ] } />
            <Input label="Position at Company"    name="position"       validators={ [ rules.maxLength(50) ] } />
            <Input label="Company Name"           name="company_name"   validators={ [ rules.maxLength(50) ] } />
            <Input label="Company Website - Opt." name="website"        validators={ [ rules.maxLength(50) ] } required={false}/>
            <Select label="Company Address"       name="place_id" endpoint="search/places"  />
        </FormPage>

        <FormPage buttonLabel="Start Receiving Candiates!" >
            <Select label="Jobs"             name="industry"   endpoint="search/job-groups"  multiple  />
            <Select label="Experience Level" name="experience" list={data.experience}        multiple />
            <Select label="Hourly Wage"      name="salary"     list={data.employerWage}    />
            <Question question="Full-time or Part-time?" input={
                <Select label="Time" name="commitment" list={data.commitment}  />
            }/>
            <Question question="In-person or Remote?" input={
                <Select label="Where" name="where" list={data.where}  />
            }/>
            <Question question="Only receive candidates authorized to work in your country?" input={
                <Select label="Authorized" name="authorized" list={data.bool}  />
            }/>
        </FormPage>

    </MultiPageForm>

    return <>
        <Head>
            <title>Finish creating your Candidate Pool</title>
        </Head>

        <Column content={candidateForm} />
    </>
}