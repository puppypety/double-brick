<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Double Brick Portfolio | Industrial Management</title>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Montserrat', sans-serif; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="bg-slate-50">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        // --- ข้อมูลระบบ ---
        const BRAND_COLOR = "#C15433";
        const PAGES = { HOME: 'home', PROCESS: 'process', QUALITY: 'quality', LEAN: 'lean', MAINTENANCE: 'maintenance', AI: 'ai' };

        function App() {
            const [currentPage, setCurrentPage] = useState(PAGES.HOME);

            // ส่วนหัว (Navigation)
            const NavItem = ({ label, page, active }) => (
                <button 
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 text-xs font-bold tracking-widest transition-all ${active ? 'text-white border-b-2 border-[#C15433]' : 'text-slate-400 hover:text-white'}`}
                >
                    {label.toUpperCase()}
                </button>
            );

            return (
                <div className="min-h-screen flex flex-col">
                    {/* Header */}
                    <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50 flex justify-between items-center shadow-lg border-b-4 border-[#C15433]">
                        <div className="font-black text-xl tracking-tighter">DOUBLE <span className="text-[#C15433]">BRICK</span></div>
                        <div className="hidden md:flex space-x-2">
                            <NavItem label="Overview" page={PAGES.HOME} active={currentPage === PAGES.HOME} />
                            <NavItem label="Process" page={PAGES.PROCESS} active={currentPage === PAGES.PROCESS} />
                            <NavItem label="Quality" page={PAGES.QUALITY} active={currentPage === PAGES.QUALITY} />
                            <NavItem label="Lean" page={PAGES.LEAN} active={currentPage === PAGES.LEAN} />
                            <NavItem label="Maintenance" page={PAGES.MAINTENANCE} active={currentPage === PAGES.MAINTENANCE} />
                            <NavItem label="✨ AI Lab" page={PAGES.AI} active={currentPage === PAGES.AI} />
                        </div>
                    </nav>

                    {/* Content Area */}
                    <main className="flex-grow p-4 md:p-8 animate-fadeIn">
                        {currentPage === PAGES.HOME && (
                            <div className="max-w-6xl mx-auto space-y-8">
                                <div className="text-center py-10">
                                    <h1 className="text-5xl font-black text-slate-800 italic uppercase tracking-tighter">Industrial Management</h1>
                                    <p className="text-slate-500 mt-2 tracking-widest uppercase text-sm">Engineering Materials ENG-203 Project</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <Card title="1. Manufacturing Process Map" img="1.jpg" />
                                    <Card title="2. Quality Control & Defects" img="2.jpg" />
                                    <Card title="3. Lean Waste Analysis" img="3.jpg" />
                                    <Card title="4. Maintenance & Cost" img="4.jpg" />
                                </div>
                            </div>
                        )}

                        {currentPage === PAGES.PROCESS && <DetailPage title="Manufacturing Process Map" img="1.jpg" />}
                        {currentPage === PAGES.QUALITY && <DetailPage title="Quality Control Analysis" img="2.jpg" />}
                        {currentPage === PAGES.LEAN && <DetailPage title="Lean Waste Analysis (7 Wastes)" img="3.jpg" />}
                        {currentPage === PAGES.MAINTENANCE && <DetailPage title="Maintenance Plan & Costing" img="4.jpg" />}
                        {currentPage === PAGES.AI && <AILab />}
                    </main>

                    <footer className="bg-slate-900 text-slate-500 py-6 text-center text-xs tracking-widest uppercase">
                        Double Brick © 2026 | TNI Industrial Engineering
                    </footer>
                </div>
            );
        }

        // ส่วนประกอบ UI: Card
        function Card({ title, img }) {
            return (
                <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100 hover:scale-[1.02] transition-transform cursor-pointer">
                    <h3 className="font-bold text-slate-800 mb-3 border-l-4 border-[#C15433] pl-3 uppercase text-sm">{title}</h3>
                    <img src={img} className="w-full h-auto rounded shadow-inner" alt={title} onError={(e) => e.target.src='https://placehold.co/600x400?text=Image+Not+Found'} />
                </div>
            );
        }

        // ส่วนประกอบ UI: Detail Page
        function DetailPage({ title, img }) {
            return (
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-black text-slate-800 mb-6 uppercase italic border-b-4 border-[#C15433] inline-block">{title}</h2>
                    <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-200">
                        <img src={img} className="w-full h-auto rounded-lg" alt={title} />
                    </div>
                </div>
            );
        }

        // ส่วนประกอบ UI: AI Lab
        function AILab() {
            const [loading, setLoading] = useState(false);
            const [result, setResult] = useState("");
            const analyze = () => {
                setLoading(true);
                setTimeout(() => {
                    setResult("วิเคราะห์พบว่า: ขั้นตอนที่ 4 (SMT) มีความเสี่ยงต่อของเสียประเภท Signal Error สูงสุด แนะนำให้เพิ่มการตรวจสอบ IPQC แบบ Real-time และปรับปรุงแผน Maintenance เครื่อง Pick & Place ทุก 15 วัน เพื่อลด PPM ให้ต่ำกว่า 500 ตามเป้าหมาย");
                    setLoading(false);
                }, 1500);
            };

            return (
                <div className="max-w-4xl mx-auto bg-slate-900 text-white p-10 rounded-3xl shadow-2xl border-t-8 border-amber-400">
                    <h2 className="text-3xl font-black mb-4 text-amber-400 uppercase tracking-tighter">✨ AI Optimization Lab</h2>
                    <p className="text-slate-400 mb-8">ระบบประมวลผลอัจฉริยะเพื่อวิเคราะห์กระบวนการผลิตและลดต้นทุน</p>
                    <button 
                        onClick={analyze} 
                        disabled={loading}
                        className="bg-amber-500 text-slate-900 font-black px-8 py-4 rounded-full hover:bg-amber-400 transition-all uppercase tracking-widest text-sm"
                    >
                        {loading ? "กำลังประมวลผล..." : "เริ่มการวิเคราะห์ข้อมูล"}
                    </button>
                    {result && (
                        <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700 animate-fadeIn text-slate-200 leading-relaxed italic">
                            {result}
                        </div>
                    )}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
