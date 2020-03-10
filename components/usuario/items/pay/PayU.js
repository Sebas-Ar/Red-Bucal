import React, { useState } from 'react'

const onSubmit = (e) => {
    let data = {
        merchantId: 508029,
        accountId: 512321,
        description: 'Test PAYU',
        referenceCode: 'TestPayU',
        amount: 20000,
        tax: 3193,
        taxReturnBase: 16806,
        currency: 'COP',
        signature: '7ee7cf808ce6a39b17481c54f2c57acc',
        test: 1, 
        buyerEmail: 'test@test.com',
        responseUrl: 'http://www.test.com/response',
        confirmationUrl: 'http://www.test.com/confirmation'

    }
    e.preventDefault()
}

const PayU = () => {
    return (
        <div className="content">
            <div className="form">
                <form>
                    <input name="merchantId" type="hidden" value="508029"   />
                    <input name="accountId" type="hidden" value="512321" />
                    <input name="description" type="hidden" value="Test PAYU"  />
                    <input name="referenceCode" type="hidden" value="TestPayU" />
                    <input name="amount" type="hidden" value="20000"   />
                    <input name="tax" type="hidden" value="3193"  />
                    <input name="taxReturnBase" type="hidden" value="16806" />
                    <input name="currency" type="hidden" value="COP" />
                    <input name="signature" type="hidden" value="7ee7cf808ce6a39b17481c54f2c57acc"  />
                    <input name="test" type="hidden" value="1" />
                    <input name="buyerEmail" type="hidden" value="test@test.com" />
                    <input name="responseUrl" type="hidden" value="http://www.test.com/response" />
                    <input name="confirmationUrl" type="hidden" value="http://www.test.com/confirmation" />
                    <button type="submit" onSubmit={onSubmit}>Enviar</button>
                </form>
            </div>
            <style jsx>{`
                
                .content {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    background: #33333399;
                    display: grid;
                }    

                .form {
                    height: 400px;
                    width: 300px;
                    background: white;
                    align-self: center;
                    justify-self: center;
                }
                
            `}</style>
        </div>
    )
}

export default PayU
