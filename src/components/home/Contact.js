import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        message: '',
        meetingDate: '',
        meetingTime: ''
    });
    const [status, setStatus] = useState(null); // null, 'loading', 'success', 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setStatus(null);
                    setFormData({
                        name: '',
                        email: '',
                        countryCode: '+91',
                        phone: '',
                        message: '',
                        meetingDate: '',
                        meetingTime: ''
                    });
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white transition-colors duration-500">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-center">
                    Let's Build <br /> <span className="text-brand-orange">Something Giant</span>.
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-center md:text-left bg-brand-black/5 dark:bg-brand-white/5 p-8 rounded-3xl border border-brand-black/10 dark:border-brand-white/10 backdrop-blur-sm">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-bold uppercase tracking-widest opacity-60">Call Us Directly</p>
                        <a href="tel:+919837033948" className="text-xl md:text-2xl font-bold hover:text-brand-orange transition-colors">+91 9837033948</a>
                        <a href="tel:+918077897867" className="text-xl md:text-2xl font-bold hover:text-brand-orange transition-colors">+91 8077897867</a>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-brand-black/20 dark:bg-brand-white/20"></div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-bold uppercase tracking-widest opacity-60">Email Us</p>
                        <a href="mailto:bytenlearn@gmail.com?subject=Enquiry from Website" className="text-xl md:text-2xl font-bold hover:text-brand-orange transition-colors underline decoration-brand-orange/50 underline-offset-4">bytenlearn@gmail.com</a>
                    </div>
                </div>

                {status === 'success' ? (
                    <div className="p-8 bg-green-500/10 border border-green-500 rounded-3xl text-center mt-16">
                        <h4 className="text-2xl font-bold text-green-500 mb-4">Message Sent!</h4>
                        <p className="text-brand-black dark:text-brand-white text-lg">We'll be in touch with you shortly.</p>
                    </div>
                ) : (
                    <motion.form
                        className="space-y-12 mt-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                    >
                        {/* Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="group">
                                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-50 group-focus-within:text-brand-pink transition-colors">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b-2 border-brand-black/20 dark:border-brand-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-pink transition-colors placeholder-brand-black/20 dark:placeholder-brand-white/20"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-50 group-focus-within:text-brand-pink transition-colors">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b-2 border-brand-black/20 dark:border-brand-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-pink transition-colors placeholder-brand-black/20 dark:placeholder-brand-white/20"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Mobile Number */}
                        <div className="group">
                            <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-50 group-focus-within:text-brand-pink transition-colors">Mobile Number *</label>
                            <div className="flex gap-4">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleInputChange}
                                    className="w-32 bg-transparent border-b-2 border-brand-black/20 dark:border-brand-white/20 py-4 text-xl font-display focus:outline-none focus:border-brand-pink transition-colors cursor-pointer"
                                    required
                                >
                                    <option value="+93">+93 (AF)</option>
                                    <option value="+355">+355 (AL)</option>
                                    <option value="+213">+213 (DZ)</option>
                                    <option value="+1684">+1684 (AS)</option>
                                    <option value="+376">+376 (AD)</option>
                                    <option value="+244">+244 (AO)</option>
                                    <option value="+1264">+1264 (AI)</option>
                                    <option value="+672">+672 (AQ)</option>
                                    <option value="+1268">+1268 (AG)</option>
                                    <option value="+54">+54 (AR)</option>
                                    <option value="+374">+374 (AM)</option>
                                    <option value="+297">+297 (AW)</option>
                                    <option value="+61">+61 (AU)</option>
                                    <option value="+43">+43 (AT)</option>
                                    <option value="+994">+994 (AZ)</option>
                                    <option value="+1242">+1242 (BS)</option>
                                    <option value="+973">+973 (BH)</option>
                                    <option value="+880">+880 (BD)</option>
                                    <option value="+1246">+1246 (BB)</option>
                                    <option value="+375">+375 (BY)</option>
                                    <option value="+32">+32 (BE)</option>
                                    <option value="+501">+501 (BZ)</option>
                                    <option value="+229">+229 (BJ)</option>
                                    <option value="+1441">+1441 (BM)</option>
                                    <option value="+975">+975 (BT)</option>
                                    <option value="+591">+591 (BO)</option>
                                    <option value="+387">+387 (BA)</option>
                                    <option value="+267">+267 (BW)</option>
                                    <option value="+55">+55 (BR)</option>
                                    <option value="+246">+246 (IO)</option>
                                    <option value="+673">+673 (BN)</option>
                                    <option value="+359">+359 (BG)</option>
                                    <option value="+226">+226 (BF)</option>
                                    <option value="+257">+257 (BI)</option>
                                    <option value="+855">+855 (KH)</option>
                                    <option value="+237">+237 (CM)</option>
                                    <option value="+1">+1 (CA)</option>
                                    <option value="+238">+238 (CV)</option>
                                    <option value="+1345">+1345 (KY)</option>
                                    <option value="+236">+236 (CF)</option>
                                    <option value="+235">+235 (TD)</option>
                                    <option value="+56">+56 (CL)</option>
                                    <option value="+86">+86 (CN)</option>
                                    <option value="+61">+61 (CX)</option>
                                    <option value="+61">+61 (CC)</option>
                                    <option value="+57">+57 (CO)</option>
                                    <option value="+269">+269 (KM)</option>
                                    <option value="+242">+242 (CG)</option>
                                    <option value="+243">+243 (CD)</option>
                                    <option value="+682">+682 (CK)</option>
                                    <option value="+506">+506 (CR)</option>
                                    <option value="+385">+385 (HR)</option>
                                    <option value="+53">+53 (CU)</option>
                                    <option value="+357">+357 (CY)</option>
                                    <option value="+420">+420 (CZ)</option>
                                    <option value="+45">+45 (DK)</option>
                                    <option value="+253">+253 (DJ)</option>
                                    <option value="+1767">+1767 (DM)</option>
                                    <option value="+1809">+1809 (DO)</option>
                                    <option value="+593">+593 (EC)</option>
                                    <option value="+20">+20 (EG)</option>
                                    <option value="+503">+503 (SV)</option>
                                    <option value="+240">+240 (GQ)</option>
                                    <option value="+291">+291 (ER)</option>
                                    <option value="+372">+372 (EE)</option>
                                    <option value="+251">+251 (ET)</option>
                                    <option value="+500">+500 (FK)</option>
                                    <option value="+298">+298 (FO)</option>
                                    <option value="+679">+679 (FJ)</option>
                                    <option value="+358">+358 (FI)</option>
                                    <option value="+33">+33 (FR)</option>
                                    <option value="+594">+594 (GF)</option>
                                    <option value="+689">+689 (PF)</option>
                                    <option value="+241">+241 (GA)</option>
                                    <option value="+220">+220 (GM)</option>
                                    <option value="+995">+995 (GE)</option>
                                    <option value="+49">+49 (DE)</option>
                                    <option value="+233">+233 (GH)</option>
                                    <option value="+350">+350 (GI)</option>
                                    <option value="+30">+30 (GR)</option>
                                    <option value="+299">+299 (GL)</option>
                                    <option value="+1473">+1473 (GD)</option>
                                    <option value="+590">+590 (GP)</option>
                                    <option value="+1671">+1671 (GU)</option>
                                    <option value="+502">+502 (GT)</option>
                                    <option value="+44">+44 (GG)</option>
                                    <option value="+224">+224 (GN)</option>
                                    <option value="+245">+245 (GW)</option>
                                    <option value="+592">+592 (GY)</option>
                                    <option value="+509">+509 (HT)</option>
                                    <option value="+379">+379 (VA)</option>
                                    <option value="+504">+504 (HN)</option>
                                    <option value="+852">+852 (HK)</option>
                                    <option value="+36">+36 (HU)</option>
                                    <option value="+354">+354 (IS)</option>
                                    <option value="+91">+91 (IN)</option>
                                    <option value="+62">+62 (ID)</option>
                                    <option value="+98">+98 (IR)</option>
                                    <option value="+964">+964 (IQ)</option>
                                    <option value="+353">+353 (IE)</option>
                                    <option value="+44">+44 (IM)</option>
                                    <option value="+972">+972 (IL)</option>
                                    <option value="+39">+39 (IT)</option>
                                    <option value="+225">+225 (CI)</option>
                                    <option value="+1876">+1876 (JM)</option>
                                    <option value="+81">+81 (JP)</option>
                                    <option value="+44">+44 (JE)</option>
                                    <option value="+962">+962 (JO)</option>
                                    <option value="+7">+7 (KZ)</option>
                                    <option value="+254">+254 (KE)</option>
                                    <option value="+686">+686 (KI)</option>
                                    <option value="+850">+850 (KP)</option>
                                    <option value="+82">+82 (KR)</option>
                                    <option value="+965">+965 (KW)</option>
                                    <option value="+996">+996 (KG)</option>
                                    <option value="+856">+856 (LA)</option>
                                    <option value="+371">+371 (LV)</option>
                                    <option value="+961">+961 (LB)</option>
                                    <option value="+266">+266 (LS)</option>
                                    <option value="+231">+231 (LR)</option>
                                    <option value="+218">+218 (LY)</option>
                                    <option value="+423">+423 (LI)</option>
                                    <option value="+370">+370 (LT)</option>
                                    <option value="+352">+352 (LU)</option>
                                    <option value="+853">+853 (MO)</option>
                                    <option value="+389">+389 (MK)</option>
                                    <option value="+261">+261 (MG)</option>
                                    <option value="+265">+265 (MW)</option>
                                    <option value="+60">+60 (MY)</option>
                                    <option value="+960">+960 (MV)</option>
                                    <option value="+223">+223 (ML)</option>
                                    <option value="+356">+356 (MT)</option>
                                    <option value="+692">+692 (MH)</option>
                                    <option value="+596">+596 (MQ)</option>
                                    <option value="+222">+222 (MR)</option>
                                    <option value="+230">+230 (MU)</option>
                                    <option value="+262">+262 (YT)</option>
                                    <option value="+52">+52 (MX)</option>
                                    <option value="+691">+691 (FM)</option>
                                    <option value="+373">+373 (MD)</option>
                                    <option value="+377">+377 (MC)</option>
                                    <option value="+976">+976 (MN)</option>
                                    <option value="+382">+382 (ME)</option>
                                    <option value="+1664">+1664 (MS)</option>
                                    <option value="+212">+212 (MA)</option>
                                    <option value="+258">+258 (MZ)</option>
                                    <option value="+95">+95 (MM)</option>
                                    <option value="+264">+264 (NA)</option>
                                    <option value="+674">+674 (NR)</option>
                                    <option value="+977">+977 (NP)</option>
                                    <option value="+31">+31 (NL)</option>
                                    <option value="+599">+599 (AN)</option>
                                    <option value="+687">+687 (NC)</option>
                                    <option value="+64">+64 (NZ)</option>
                                    <option value="+505">+505 (NI)</option>
                                    <option value="+227">+227 (NE)</option>
                                    <option value="+234">+234 (NG)</option>
                                    <option value="+683">+683 (NU)</option>
                                    <option value="+672">+672 (NF)</option>
                                    <option value="+1670">+1670 (MP)</option>
                                    <option value="+47">+47 (NO)</option>
                                    <option value="+968">+968 (OM)</option>
                                    <option value="+92">+92 (PK)</option>
                                    <option value="+680">+680 (PW)</option>
                                    <option value="+970">+970 (PS)</option>
                                    <option value="+507">+507 (PA)</option>
                                    <option value="+675">+675 (PG)</option>
                                    <option value="+595">+595 (PY)</option>
                                    <option value="+51">+51 (PE)</option>
                                    <option value="+63">+63 (PH)</option>
                                    <option value="+870">+870 (PN)</option>
                                    <option value="+48">+48 (PL)</option>
                                    <option value="+351">+351 (PT)</option>
                                    <option value="+1">+1 (PR)</option>
                                    <option value="+974">+974 (QA)</option>
                                    <option value="+262">+262 (RE)</option>
                                    <option value="+40">+40 (RO)</option>
                                    <option value="+7">+7 (RU)</option>
                                    <option value="+250">+250 (RW)</option>
                                    <option value="+590">+590 (BL)</option>
                                    <option value="+290">+290 (SH)</option>
                                    <option value="+1869">+1869 (KN)</option>
                                    <option value="+1758">+1758 (LC)</option>
                                    <option value="+590">+590 (MF)</option>
                                    <option value="+508">+508 (PM)</option>
                                    <option value="+1784">+1784 (VC)</option>
                                    <option value="+685">+685 (WS)</option>
                                    <option value="+378">+378 (SM)</option>
                                    <option value="+239">+239 (ST)</option>
                                    <option value="+966">+966 (SA)</option>
                                    <option value="+221">+221 (SN)</option>
                                    <option value="+381">+381 (RS)</option>
                                    <option value="+248">+248 (SC)</option>
                                    <option value="+232">+232 (SL)</option>
                                    <option value="+65">+65 (SG)</option>
                                    <option value="+421">+421 (SK)</option>
                                    <option value="+386">+386 (SI)</option>
                                    <option value="+677">+677 (SB)</option>
                                    <option value="+252">+252 (SO)</option>
                                    <option value="+27">+27 (ZA)</option>
                                    <option value="+500">+500 (GS)</option>
                                    <option value="+34">+34 (ES)</option>
                                    <option value="+94">+94 (LK)</option>
                                    <option value="+249">+249 (SD)</option>
                                    <option value="+597">+597 (SR)</option>
                                    <option value="+47">+47 (SJ)</option>
                                    <option value="+268">+268 (SZ)</option>
                                    <option value="+46">+46 (SE)</option>
                                    <option value="+41">+41 (CH)</option>
                                    <option value="+963">+963 (SY)</option>
                                    <option value="+886">+886 (TW)</option>
                                    <option value="+992">+992 (TJ)</option>
                                    <option value="+255">+255 (TZ)</option>
                                    <option value="+66">+66 (TH)</option>
                                    <option value="+670">+670 (TL)</option>
                                    <option value="+228">+228 (TG)</option>
                                    <option value="+690">+690 (TK)</option>
                                    <option value="+676">+676 (TO)</option>
                                    <option value="+1868">+1868 (TT)</option>
                                    <option value="+216">+216 (TN)</option>
                                    <option value="+90">+90 (TR)</option>
                                    <option value="+993">+993 (TM)</option>
                                    <option value="+1649">+1649 (TC)</option>
                                    <option value="+688">+688 (TV)</option>
                                    <option value="+256">+256 (UG)</option>
                                    <option value="+380">+380 (UA)</option>
                                    <option value="+971">+971 (AE)</option>
                                    <option value="+44">+44 (GB)</option>
                                    <option value="+1">+1 (US)</option>
                                    <option value="+598">+598 (UY)</option>
                                    <option value="+998">+998 (UZ)</option>
                                    <option value="+678">+678 (VU)</option>
                                    <option value="+58">+58 (VE)</option>
                                    <option value="+84">+84 (VN)</option>
                                    <option value="+1284">+1284 (VG)</option>
                                    <option value="+1340">+1340 (VI)</option>
                                    <option value="+681">+681 (WF)</option>
                                    <option value="+967">+967 (YE)</option>
                                    <option value="+260">+260 (ZM)</option>
                                    <option value="+263">+263 (ZW)</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="flex-1 bg-transparent border-b-2 border-brand-black/20 dark:border-brand-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-pink transition-colors placeholder-brand-black/20 dark:placeholder-brand-white/20"
                                    placeholder="9876543210"
                                    pattern="[0-9]{10,15}"
                                    title="Please enter a valid phone number"
                                    required
                                />
                            </div>
                        </div>

                        {/* Meeting Scheduler */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-brand-black dark:text-brand-white opacity-80">
                                Schedule a Meeting If You Want To
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group">
                                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-50 group-focus-within:text-brand-pink transition-colors">Date</label>
                                    <input
                                        type="date"
                                        name="meetingDate"
                                        value={formData.meetingDate}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b-2 border-brand-black/20 dark:border-brand-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-pink transition-colors placeholder-brand-black/20 dark:placeholder-brand-white/20"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-50 group-focus-within:text-brand-pink transition-colors">Time</label>
                                    <input
                                        type="time"
                                        name="meetingTime"
                                        value={formData.meetingTime}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b-2 border-brand-black/20 dark:border-brand-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-pink transition-colors placeholder-brand-black/20 dark:placeholder-brand-white/20"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="group">
                            <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-50 group-focus-within:text-brand-pink transition-colors">Message (Optional)</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b-2 border-brand-black/20 dark:border-brand-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-pink transition-colors resize-none placeholder-brand-black/20 dark:placeholder-brand-white/20"
                                placeholder="Tell us about your next big idea..."
                            />
                        </div>

                        <div className="text-center pt-8">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="px-16 py-6 bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black font-display font-bold text-2xl uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-2 shadow-lg hover:shadow-brand-orange/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'error' && (
                                <p className="text-red-500 mt-4 font-bold">Failed to send message. Please try again.</p>
                            )}
                        </div>
                    </motion.form>
                )}
            </div>
        </section>
    );
}
