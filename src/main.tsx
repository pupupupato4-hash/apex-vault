import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./styles.css";

type Product = {
  id: string; game: string; title: string; description: string; price: number; stock: number; accent: string;
};
type Reward = { id: string; name: string; rarity: string; probability: number; stock: number };

const products: Product[] = [
  {id:"ff-001",game:"Free Fire",title:"Diamond Pack 530",description:"เติมเพชร Free Fire สำหรับบัญชีเกม",price:179,stock:42,accent:"ff"},
  {id:"ff-002",game:"Free Fire",title:"Diamond Pack 1080",description:"แพ็กเพชรขนาดใหญ่สำหรับผู้เล่นประจำ",price:349,stock:18,accent:"ff"},
  {id:"ef-001",game:"eFootball",title:"eFootball Coins 1,050",description:"เติมเหรียญสำหรับ Dream Team",price:299,stock:31,accent:"ef"},
  {id:"rov-001",game:"ROV",title:"คูปอง 1,200",description:"เติมคูปอง ROV เข้าบัญชี",price:399,stock:27,accent:"rov"},
  {id:"rbx-001",game:"Roblox",title:"Robux 800",description:"เครดิต Robux สำหรับ Roblox",price:319,stock:20,accent:"rbx"}
];

const rewards: Reward[] = [
  {id:"r1",name:"Legendary Skin",rarity:"LEGENDARY",probability:1,stock:2},
  {id:"r2",name:"Epic Bundle",rarity:"EPIC",probability:5,stock:8},
  {id:"r3",name:"Rare Item",rarity:"RARE",probability:14,stock:20},
  {id:"r4",name:"Voucher 100",rarity:"UNCOMMON",probability:30,stock:40},
  {id:"r5",name:"Coin Bonus",rarity:"COMMON",probability:50,stock:100}
];

const money = (n:number) => new Intl.NumberFormat("th-TH",{style:"currency",currency:"THB"}).format(n);

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [game, setGame] = useState("All");
  const [balance] = useState(1250);

  const filtered = useMemo(() => products.filter(p =>
    (game === "All" || p.game === game) &&
    `${p.game} ${p.title} ${p.description}`.toLowerCase().includes(query.toLowerCase())
  ), [query, game]);

  const add = (p:Product) => setCart(c => [...c,p]);

  return <div className="app">
    <header className="topbar">
      <Link className="brand" to="/"><span className="brand-mark">◆</span> APEX <b>VAULT</b></Link>
      <nav>
        <NavLink to="/">Marketplace</NavLink>
        <NavLink to="/lucky-draw">Lucky Draw</NavLink>
        <NavLink to="/wallet">Wallet</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
      <div className="top-actions"><span className="balance">฿{balance.toLocaleString()}</span><Link className="cart" to="/checkout">CART {cart.length}</Link></div>
    </header>

    <Routes>
      <Route path="/" element={<Home query={query} setQuery={setQuery} game={game} setGame={setGame} products={filtered} add={add}/>}/>
      <Route path="/product/:id" element={<ProductDetail add={add}/>}/>
      <Route path="/checkout" element={<Checkout cart={cart}/>}/>
      <Route path="/lucky-draw" element={<LuckyDraw/>}/>
      <Route path="/login" element={<Auth mode="login"/>}/>
      <Route path="/register" element={<Auth mode="register"/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/vault" element={<Vault/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/terms" element={<Legal title="Terms of Service"/>}/>
      <Route path="/privacy" element={<Legal title="Privacy Policy"/>}/>
      <Route path="/admin/*" element={<Admin/>}/>
    </Routes>

    <footer><span>© 2026 APEX VAULT</span><span><Link to="/terms">Terms</Link> · <Link to="/privacy">Privacy</Link></span></footer>
  </div>;
}

function Home({query,setQuery,game,setGame,products,add}:{query:string;setQuery:(s:string)=>void;game:string;setGame:(s:string)=>void;products:Product[];add:(p:Product)=>void}) {
  return <main>
    <section className="hero"><div><div className="eyebrow">NEXT-GEN GAMING MARKETPLACE</div><h1>YOUR <span>VAULT</span>.<br/>YOUR GAME.</h1><p>ซื้อไอเทมเกม เติมเครดิต และลุ้นรางวัลในระบบเดียว</p><div className="hero-actions"><Link className="btn primary" to="/lucky-draw">EXPLORE LUCKY DRAW</Link><a className="btn ghost" href="#market">BROWSE MARKET</a></div></div><div className="hero-orb">AV</div></section>
    <section id="market" className="section"><div className="section-head"><div><div className="eyebrow">MARKETPLACE</div><h2>Featured Products</h2></div><Link to="/wallet" className="mini-link">TOP UP WALLET →</Link></div>
      <div className="filters"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ค้นหาสินค้า..."/><div className="chips">{["All","Free Fire","eFootball","ROV","Roblox"].map(g=><button key={g} className={game===g?"chip active":"chip"} onClick={()=>setGame(g)}>{g}</button>)}</div></div>
      <div className="grid">{products.map(p=><ProductCard key={p.id} p={p} add={add}/>)}</div>
    </section>
  </main>
}

function ProductCard({p,add}:{p:Product;add:(p:Product)=>void}) {
  return <article className="product"><div className={`product-art ${p.accent}`}><span>{p.game}</span><strong>AV</strong></div><div className="product-body"><small>{p.game}</small><h3>{p.title}</h3><p>{p.description}</p><div className="product-foot"><b>{money(p.price)}</b><span>Stock {p.stock}</span></div><div className="product-actions"><Link className="btn ghost" to={`/product/${p.id}`}>DETAIL</Link><button className="btn primary" onClick={()=>add(p)}>ADD</button></div></div></article>
}

function ProductDetail({add}:{add:(p:Product)=>void}) {
  const {id}=useParams(); const p=products.find(x=>x.id===id) || products[0];
  return <main className="page"><Link to="/" className="back">← Marketplace</Link><div className="detail"><div className={`detail-art ${p.accent}`}>APEX<br/>VAULT</div><div><div className="eyebrow">{p.game}</div><h1>{p.title}</h1><p className="lead">{p.description}</p><div className="price-xl">{money(p.price)}</div><p>พร้อมส่งทันที · Stock {p.stock}</p><button className="btn primary large" onClick={()=>add(p)}>ADD TO CART</button></div></div></main>
}

function Checkout({cart}:{cart:Product[]}) {
  const total=cart.reduce((s,p)=>s+p.price,0);
  return <main className="page"><div className="eyebrow">CHECKOUT</div><h1>Confirm your order</h1>{cart.length===0?<div className="empty">ยังไม่มีสินค้าในตะกร้า <Link to="/">กลับ Marketplace</Link></div>:<div className="checkout"><div>{cart.map((p,i)=><div className="line" key={i}><span>{p.title}</span><b>{money(p.price)}</b></div>)}</div><div className="total"><span>Total</span><strong>{money(total)}</strong></div><button className="btn primary large">PLACE ORDER</button><p className="muted">การตัดเงินจริงควรทำผ่าน server-side transaction และตรวจสอบ wallet balance ในฐานข้อมูล</p></div>}</main>
}

function LuckyDraw() {
  const [result,setResult]=useState<Reward|null>(null);
  const draw=()=>{const total=rewards.reduce((s,r)=>s+r.probability,0);let x=Math.random()*total;setResult(rewards.find(r=>(x-=r.probability)<=0)||rewards.at(-1)!);};
  return <main className="page"><div className="eyebrow">RANDOM REWARD SYSTEM</div><h1>Lucky Draw</h1><p className="lead">โอกาสได้รับรางวัลแสดงอย่างชัดเจนและควรเก็บค่าความน่าจะเป็นไว้ใน Database</p><div className="draw-layout"><div className="draw-card"><div className="vault-wheel">?</div><button className="btn primary large" onClick={draw}>DRAW REWARD</button>{result&&<div className="result">YOU WON <strong>{result.name}</strong><small>{result.rarity}</small></div>}</div><div className="rewards"><h2>Reward Table</h2>{rewards.map(r=><div className="reward" key={r.id}><span><b>{r.name}</b><small>{r.rarity} · stock {r.stock}</small></span><strong>{r.probability.toFixed(2)}%</strong></div>)}</div></div></main>
}

function Auth({mode}:{mode:"login"|"register"}) { return <main className="page auth"><div className="auth-card"><div className="eyebrow">APEX ID</div><h1>{mode==="login"?"Welcome back":"Create account"}</h1><input placeholder="Email"/><input placeholder="Password" type="password"/>{mode==="register"&&<input placeholder="Username"/>}<button className="btn primary large">{mode==="login"?"LOGIN":"REGISTER"}</button><p>{mode==="login"?<>New here? <Link to="/register">Register</Link></>:<>Already have an account? <Link to="/login">Login</Link></>}</p></div></main> }

function Profile(){return <main className="page"><div className="eyebrow">ACCOUNT</div><h1>Profile</h1><div className="profile-grid"><div className="panel"><h3>APEX ID</h3><p>member@example.com</p><p className="wallet-big">฿1,250.00</p><Link className="btn primary" to="/wallet">TOP UP</Link></div><div className="panel"><h3>Quick Links</h3><Link to="/history">Purchase History →</Link><Link to="/vault">Credential Vault →</Link><button className="danger">LOGOUT</button></div></div></main>}
function Wallet(){return <main className="page"><div className="eyebrow">WALLET</div><h1>Top Up Wallet</h1><div className="wallet-panel"><div className="wallet-big">฿1,250.00</div><div className="amounts">{[100,300,500,1000,3000].map(x=><button key={x} className="chip">฿{x}</button>)}</div><button className="btn primary large">CREATE TOP-UP REQUEST</button><p className="muted">รองรับการเชื่อม TrueMoney ผ่าน official API/ผู้ให้บริการที่ได้รับอนุญาตในอนาคต ไม่มีการ bypass หรือปลอมแปลงการชำระเงิน</p></div></main>}
function History(){return <main className="page"><div className="eyebrow">ORDERS</div><h1>Purchase History</h1>{["#AV-10482"," #AV-10476"," #AV-10461"].map((x,i)=><div className="order" key={i}><span><b>{x}</b><small>2026-09-{24-i} · Completed</small></span><strong>{money([399,179,319][i])}</strong></div>)}</main>}
function Vault(){return <main className="page"><div className="eyebrow">SECURE DELIVERY</div><h1>Credential Vault</h1><div className="panel"><p>ข้อมูล credential สำหรับสินค้าที่ซื้อจะแสดงผ่านระบบที่มีสิทธิ์เข้าถึงและ audit log</p><div className="secret">••••••••••••••••</div><button className="btn ghost">REVEAL WITH AUTHORIZATION</button></div></main>}
function Success(){return <main className="page center"><div className="success">✓</div><div className="eyebrow">ORDER COMPLETE</div><h1>Order Success</h1><p className="lead">ระบบบันทึกคำสั่งซื้อเรียบร้อยแล้ว</p><Link className="btn primary" to="/history">VIEW ORDER</Link></main>}
function Legal({title}:{title:string}){return <main className="page legal"><div className="eyebrow">APEX VAULT</div><h1>{title}</h1><h2>1. Overview</h2><p>เอกสารนี้เป็นโครงสร้างเริ่มต้นสำหรับนำไปเติมรายละเอียดทางกฎหมายและข้อกำหนดที่เกี่ยวข้องกับธุรกิจจริง</p><h2>2. Account & Security</h2><p>ผู้ใช้ต้องรักษาข้อมูลเข้าสู่ระบบของตน และระบบควรใช้ server-side authorization สำหรับข้อมูลสำคัญ</p><h2>3. Payments</h2><p>การชำระเงินต้องตรวจสอบจากผู้ให้บริการอย่างเป็นทางการก่อนเพิ่มยอด wallet</p></main>}

function Admin(){
  const [tab,setTab]=useState("Dashboard");
  const tabs=["Dashboard","Products","Stock","Lucky Draw","Users","Wallet / Topups","Orders","Admin Logs"];
  return <main className="page"><div className="admin-head"><div><div className="eyebrow">CONTROL CENTER</div><h1>Admin Console</h1></div><span className="status">● SECURE SESSION</span></div><div className="admin-tabs">{tabs.map(t=><button className={tab===t?"chip active":"chip"} key={t} onClick={()=>setTab(t)}>{t}</button>)}</div><div className="admin-grid">{tab==="Dashboard"?<><Stat n="1,284" l="Users"/><Stat n="฿82,430" l="Wallet Volume"/><Stat n="318" l="Orders"/><Stat n="24" l="Pending Topups"/><div className="panel wide"><h2>Admin activity</h2><p>ระบบพร้อมเชื่อม audit logs และ database policies</p></div></>:<div className="panel wide"><h2>{tab}</h2><p>พื้นที่สำหรับ CRUD และ server-side actions ของ {tab}</p><div className="table"><div>ID</div><div>NAME / STATUS</div><div>ACTION</div>{[1,2,3].map(i=><React.Fragment key={i}><div>AV-{i}00{i}</div><div>Sample record</div><button className="btn ghost">EDIT</button></React.Fragment>)}</div></div>}</div></main>
}
function Stat({n,l}:{n:string;l:string}){return <div className="stat"><strong>{n}</strong><span>{l}</span></div>}

createRoot(document.getElementById("root")!).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
