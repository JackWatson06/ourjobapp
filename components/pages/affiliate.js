import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
import styles from '../../styles/Affiliate.module.css'

import MultiPageForm from '../organisms/multi-page-form';
import AffiliateForm from '../organisms/forms/affiliate-form';

/**
 * 
 * @param {object} props Properties we are passing into this component. 
 */
 export default function Affiliate(props)
 {
     
    return <>

        {/* SEO Header Tags */}
        <Head>
            <title>Become an affiliate!</title>
        </Head>

        {/* Navigation Bar */}
        <div className={ styles.nav }>

            {/* Items on left side of navigation */}
            <div>
                <Image 
                    src="/images/svg/gray_logo.svg"
                    alt="ALC"
                    width={40}
                    height={40}
                />
                <span>UJA</span>
            </div>

            {/* Items on right side of navigation */}
            <div>
                <FontAwesomeIcon icon={ faChevronLeft } />
                <FontAwesomeIcon icon={ faQuestion } />
            </div>

        </div>

        {/* Form Page these are part of a larger multi 'page' form. Questions we need answers for. Can we use react router this low since we may be
        able to use that as a switch case. We need to hold state of the options filled out if you go to option two without already filling out
        option one it will automatically redirect to option one. */}
        <MultiPageForm>
            <AffiliateForm />
        </MultiPageForm>
    </>;
 }