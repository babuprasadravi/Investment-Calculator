export default function Input({userInput,handleOnChange}){
    return(
        <section id="user-input">
            <section>

                <div className="input-group">
                <p>
                    <label htmlFor="">INITIAL INVESTMENT</label>
                    <input type="number" onChange={(e) => {handleOnChange('initialInvestment',e.target.value)}} value={userInput.initialInvestment} />
                </p>
                <p>
                    <label htmlFor="">ANNUAL INVESTMENT</label>
                    <input type="number" onChange={(e) => {handleOnChange('annualInvestment',e.target.value)}} value={userInput.annualInvestment} />
                </p>
                </div>

                <div className="input-group">
                <p>
                    <label htmlFor="">EXPECTED RETURN</label>
                    <input type="number" onChange={(e) => {handleOnChange('expectedReturn',e.target.value)}} value={userInput.expectedReturn} />
                </p>
                <p>
                    <label htmlFor="">DURATION</label>
                    <input type="number" onChange={(e) => {handleOnChange('duration',e.target.value)}} value={userInput.duration} />
                </p>
                </div>
            </section>
        </section>
    )
}