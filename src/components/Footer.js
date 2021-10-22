import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Line = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    margin: 0;
    border-top: 1px solid black;
    
`

const StyledFooter = styled.footer`
    
    
    width: 100%;
    margin: 0 auto;
    background-color:  var(--white);
    padding-top: 0;
    padding-bottom: 0;
    text-align: right;
    box-shadow: 0 -5px 2px -5px #333;
    

    height: calc(var(--nav-height)*2);
    
        a{
            padding-right: 5%;
            padding-top: .5%;
            display:inline-block;
            text-decoration:none;
            color: black;
        }

    .footerLinks{
        display:flex;
        justify-content: space-between;
        p{
            padding-top: .5%;
            display:inline;
            padding-left: 5%;
        }
    }
    
    @media (max-width: 310px){
        .footerLinks{
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;


            p{
                padding-left: 0;
            }
            a{
                padding-right: 0;
            }
            
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <Line />
            <div className='footerLinks'>
                <p>Copyright &copy; 2021 PP8</p>
                <Link to='/team'>Meet the Team</Link>
            </div>
        </StyledFooter>
    )
}
