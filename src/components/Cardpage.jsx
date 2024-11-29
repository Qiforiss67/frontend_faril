import Card from "../fragment/card"
import budi from "../assets/Image/budi.svg"
import figma from "../assets/image/figma.svg"
import digital from "../assets/Image/digital.svg"
import tamayo from "../assets/Image/tamayo.svg"
import iot from "../assets/Image/iot.svg"
import ahmad from "../assets/Image/ahmad.svg"
import bio from "../assets/Image/bio.svg"
import kenji from "../assets/Image/kenji.svg"
import anak from "../assets/Image/anak.svg"
import grace from "../assets/Image/grace.svg"
import web from "../assets/image/web.svg"
import haryanto from "../assets/Image/haryanto.svg"

function Cardpage() {
    return(
        <div className="flex flex-wrap justify-around px-14 gap-y-10 relative z-10">
            <Card>
            <Card.Image image={figma}></Card.Image>
            <Card.Kategori kategori="Webinar">Khusus UB</Card.Kategori>
            <Card.Body title="Figma UI UX Design">Gunakan Figma untuk mecari pekerjaan di bidang UI Design dan UX Researcher...</Card.Body>
            <Card.Tanggal>8 Maret 2024</Card.Tanggal>
            <Card.Creator image={budi} nama="Budiman Darmono" title="UI UX Designer"></Card.Creator>
            </Card>

            <Card>
            <Card.Image image={digital}></Card.Image>
            <Card.Kategori kategori="Seminar">Publik</Card.Kategori>
            <Card.Body title="Digital Business">Temukan strategi terkini dan praktis untuk mengoptimalkan bisnis Anda di era digital...</Card.Body>
            <Card.Tanggal>12 Februari 2024</Card.Tanggal>
            <Card.Creator image={tamayo} nama="Tamayo Kento" title="Digital Marketer"></Card.Creator>
            </Card>

            <Card>
            <Card.Image image={iot}></Card.Image>
            <Card.Kategori kategori="Seminar">Khusus UB</Card.Kategori>
            <Card.Body title="Pengoptimalan IOT">Memberikan wawasan mendalam untuk meningkatkan inovasi melalui teknologi IoT...</Card.Body>
            <Card.Tanggal>30 Maret 2024</Card.Tanggal>
            <Card.Creator image={ahmad} nama="Ahmad Wirianto" title="Dosen Teknik Elektro, Universitas Brawijaya"></Card.Creator>
            </Card>

            <Card>
            <Card.Image image={bio}></Card.Image>
            <Card.Kategori kategori="Kuliah Tamu">Khusus UB</Card.Kategori>
            <Card.Body title="Biomedik Dasar">Gunakan Figma untuk mecari pekerjaan di bidang UI Design dan UX Researcher...</Card.Body>
            <Card.Tanggal>23 April 2024</Card.Tanggal>
            <Card.Creator image={kenji} nama="dr. Muhammad Kenji, s.ked" title="Dokter"></Card.Creator>
            </Card>

            <Card>
            <Card.Image image={anak}></Card.Image>
            <Card.Kategori kategori="Seminar">Publik</Card.Kategori>
            <Card.Body title="Perlindungan Hak Anak">Memahami hak dan perlindungan anak-anak dengan keunikan khusus...</Card.Body>
            <Card.Tanggal>29 Mei 2024</Card.Tanggal>
            <Card.Creator image={grace} nama="Gracec Nomali" title="Aktivis"></Card.Creator>
            </Card>

            <Card>
            <Card.Image image={web}></Card.Image>
            <Card.Kategori kategori="Kuliah Tamu">Khusus UB</Card.Kategori>
            <Card.Body title="Web Programming">Belajar web programming dengan menggunakan bahasa Javascript...</Card.Body>
            <Card.Tanggal>1 Juni 2024</Card.Tanggal>
            <Card.Creator image={budi} nama="Ir. M Haryanto, S.kom" title="Dosen Pemrograman"></Card.Creator>
            </Card>

        </div>
    );
    
};

export default Cardpage;