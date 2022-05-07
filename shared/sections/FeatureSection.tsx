import Container from "@components/Container"
import FeatureBox from "@components/FeatureBox"

export default function FeatureSection() {
  return (
    <Container>
      <h1 className="text-xl font-bold text-white mb-4">Features</h1>

      <div className="grid grid-cols-2 gap-4">
        <FeatureBox title="test" body="body" />
        <FeatureBox title="test 2" body="body 2" />
        <FeatureBox title="test 3" body="body 3" />
        <FeatureBox title="test 4" body="body 4" />
      </div>
    </Container>
  )
}
