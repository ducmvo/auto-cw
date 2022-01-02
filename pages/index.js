import { useState } from 'react'

import axios from 'axios'
import {
	Result,
	ResultCard,
	RollRow,
	Loader,
	Container,
	Form,
	Row,
	Button
} from '../styles/Home'
const Home = () => {
	const [charID, setCharID] = useState('')
	const [weaponID, setWeaponID] = useState('')
	const [targets, setTargets] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

	const onSubmitHandler = async (e) => {
		e.preventDefault()
		setError(null)
		setLoading(true)
		try {
			const result = await axios.post('/api/fight-result', {
				characterID: charID,
				weaponID: weaponID
			})
			setTargets(result?.data?.targets)
		} catch (error) {
			setError(error.response.data)
		}
		setLoading(false)
	}

	const calculatedResult = (targets && !loading && (
		<Result>
			{targets.map((target) => (
				<ResultCard key={target.target}>
					<h2 style={{ color: 'teal' }}>{target.target}</h2>
					<h3 style={{ color: target.rate > 50 ? 'green' : 'red' }}>
						{target.rate}%
					</h3>
					<h3>Bonus {target.bonus}</h3>
					<h4>ROLL STATS</h4>
					<RollRow>Monster Max {target.tmax.toFixed(0)}</RollRow>
					<RollRow>Monster Min {target.tmin.toFixed(0)}</RollRow>
					<RollRow>Player Max {target.pmax.toFixed(0)}</RollRow>
					<RollRow>Player Min {target.pmin.toFixed(0)}</RollRow>
				</ResultCard>
			))}
		</Result>
	)) || (
		<Result>
			<ResultCard>{loading && <Loader />}</ResultCard>
			<ResultCard>{loading && <Loader />}</ResultCard>
			<ResultCard>{loading && <Loader />}</ResultCard>
			<ResultCard>{loading && <Loader />}</ResultCard>
		</Result>
	)
	return (
		<Container>
			<Form>
				{error && <Row style={{ color: 'red' }}>{error}</Row>}
				<Row>
					<label>Hero ID </label>
					<input
						type="text"
						id="characterID"
						value={charID}
						onChange={(e) => setCharID(e.target.value)}
					/>
				</Row>
				<Row>
					<label>Weapon ID </label>
					<input
						type="text"
						id="weaponID"
						value={weaponID}
						onChange={(e) => setWeaponID(e.target.value)}
					/>
				</Row>
				<Row>
					<Button
						onClick={onSubmitHandler}
						disabled={!charID || !weaponID}
					>
						Calculate
					</Button>
				</Row>
			</Form>
			{calculatedResult}
		</Container>
	)
}

export default Home
